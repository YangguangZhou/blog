---
title: 优雅地通过OpenAI Refresh Token自动获取Access/Share Token
categories:
  - AI
date: '2024/06/04 13:27:38'
keywords: 'ChatGPT,PandoraNext,AI,OpenAI,RefreshToken,Neo,始皇,AccessToken,ShareToken'
tags:
  - 编程
  - AI
  - ChatGPT
  - LLM
abbrlink: 25137
highlight_shrink: true
cover: https://img.examcoo.com/ask/7386438/202406/171749993128340.png
main_color: '#c0d7f7'
ai: 这篇文章介绍了获取和生成Refresh Token以及Access/Share Token的详细步骤。用户需通过特定网站获取Refresh Token，然后在另一个网站生成三个链接，包括Access Tokens和Share Tokens的链接。每七天自动刷新Token，用户可以选择将Tokens上传到共享站。文章还列出了可以使用Tokens的项目，并强调了隐私声明，保证用户输入的Refresh Tokens会被加密保存，不会被盗用或共享。
description: 通过OpenAI Refresh Token自动获取Access/Share Token，Token每七天自动刷新。
---

https://tokens.jerryz.com.cn/

# 获取Refresh Token

1. 前往 https://token.oaifree.com/auth 获取，但是需要是Linux Do论坛的三级用户
2. 自己获取 Refresh Token : https://linux.do/t/topic/42253
{% folding 全文内容 %}
始皇最近整了个token服务：
https://linux.do/t/topic/40591

搞个获取token的脚本，原理见：
https://zhile.io/2023/05/19/how-to-get-chatgpt-access-token-via-pkce.html
直接贴码：
```python
import base64
import hashlib
import json
import os
import random
import string
import time
from urllib.parse import urlparse

import click
import requests
from DrissionPage import ChromiumOptions
from DrissionPage._pages.web_page import WebPage


def to_time(t: int = None):
    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(t))


def to_timestamp(t: str = None):
    return time.strptime(t, '%Y-%m-%d %H:%M:%S') if t else time.time()


class TokenManager:
    def __init__(
            self,
            refresh_token=None,
            device_token=None,
            refresh_interval=60,
            storage_path='./token.json',
            proxy='http://127.0.0.1:10809',
    ):
        self.refresh_token = refresh_token
        self.device_token = device_token
        self.refresh_interval = refresh_interval
        self.access_token = None
        self.storage_path = storage_path
        self.co = ChromiumOptions()
        if proxy:
            self.co.set_proxy(proxy)
            self.proxy = {'all': proxy}
        else:
            self.proxy = None
        self.load_token()
        self.save_token()

    def get_refresh_token(self):
        self.ensure_refresh_token()
        return self.refresh_token

    def get_access_token(self):
        if self.is_expired():
            self.refresh()
        return self.access_token

    def get_sess_key(self):
        response = requests.post(
            'https://api.openai.com/dashboard/onboarding/login',
            headers={
                "Authorization": f"Bearer {self.get_access_token()}",
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0",
            },
            proxies=self.proxy
        )
        if response.ok:
            data = json.loads(response.text)
            return {
                'sess_key': data['user']['session']['sensitive_id'],
                'created': to_time(data['user']['session']['created']),
                'last_use': to_time(data['user']['session']['last_use']),
            }

    def is_expired(self):
        if not self.access_token:
            return True
        payload = self.access_token.split('.')[1]
        payload = payload + '=' * - (len(payload) % - 4)
        exp = json.loads(base64.b64decode(payload).decode()).get('exp')
        return exp - time.time() < 60

    def refresh(self):
        self.ensure_refresh_token()
        self.access_token = self.generate_access_token()

    def ensure_refresh_token(self):
        if self.refresh_token:
            return
        code_verifier = self.generate_code_verifier()
        code_challenge = self.generate_code_challenge(code_verifier)
        preauth_cookie = self.get_preauth_cookie()
        if not preauth_cookie:
            raise Exception('抓取preauth_cookie失败')
        url = f'https://auth0.openai.com/authorize' \
              f'?client_id=pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh' \
              f'&audience=https%3A%2F%2Fapi.openai.com%2Fv1' \
              f'&redirect_uri=com.openai.chat%3A%2F%2Fauth0.openai.com%2Fios%2Fcom.openai.chat%2Fcallback' \
              f'&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20offline' \
              f'&response_type=code' \
              f'&code_challenge={code_challenge}' \
              f'&code_challenge_method=S256' \
              f'&preauth_cookie={preauth_cookie}'

        url += '&prompt=login'
        # print(url)
        # code = input('code: ')
        page = WebPage(chromium_options=self.co)
        page.get(url)
        page.listen.start('com.openai.chat://auth0.openai.com/ios/com.openai.chat/callback')
        res = page.listen.wait()
        query1 = {args.split('=')[0]: args.split('=')[1] for args in urlparse(res.url).query.split('&')}
        code = query1.get('code')
        if not code:
            raise Exception('preauth_cookie已过期')
        # state = query1['state']
        page.close()
        resp_json = requests.post('https://auth0.openai.com/oauth/token', json={
            'redirect_uri': 'com.openai.chat://auth0.openai.com/ios/com.openai.chat/callback',
            'grant_type': 'authorization_code',
            'client_id': 'pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh',
            'code': code,
            'code_verifier': code_verifier
        }, proxies=self.proxy).json()
        # json.dump(resp_json, open('./app.json', 'w'))
        # print(json.dumps(resp_json, indent=2))
        self.refresh_token = resp_json.get('refresh_token')
        self.save_token()

    def revoke_refresh_token(self, refresh_token):
        resp = requests.post('https://auth0.openai.com/oauth/revoke', json={
            'client_id': 'pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh',
            'token': refresh_token
        }, proxies=self.proxy)
        assert resp.status_code == 200
        self.refresh_token = None
        self.save_token()

    @staticmethod
    def generate_code_verifier():
        return base64.urlsafe_b64encode(os.urandom(32)).decode().rstrip('=')

    @staticmethod
    def generate_code_challenge(code_verifier):
        m = hashlib.sha256()
        m.update(code_verifier.encode())
        return base64.urlsafe_b64encode(m.digest()).decode().rstrip('=')

    def get_preauth_cookie(self):
        # fakeopen已挂
        # return requests.get('https://ai.fakeopen.com/auth/preauth').json().get('preauth_cookie')
        if self.device_token:
            rsp = requests.post(
                'https://ios.chat.openai.com/backend-api/preauth_devicecheck',
                json={
                    "bundle_id": "com.openai.chat",
                    "device_id": "62345678-042E-45C7-962F-AC725D0E7770",
                    "device_token": self.device_token,
                    "request_flag": True
                },
                proxies=self.proxy
            )
            if rsp.status_code == 200 and rsp.json().get('is_ok'):
                return rsp.cookies.get('_preauth_devicecheck')
        raise Exception('抓取preauth_cookie失败')

    def generate_access_token(self):
        self.ensure_refresh_token()
        resp = requests.post('https://token.oaifree.com/api/auth/refresh', data={
            'refresh_token': self.refresh_token
        })
        if resp.status_code == 200:
            access_token = resp.json().get('access_token')
            self.access_token = access_token
            self.save_token()
            return access_token
        else:
            return self.generate_access_token_old()

    def generate_share_token(self, unique_name='share_token'):
        # share_token的有效期还取决于access_token
        resp = requests.post('https://chat.oaifree.com/token/register', data={
            'unique_name': unique_name,
            'access_token': self.get_access_token(),
            'expires_in': 20,
            'site_limit': None,
            'gpt35_limit': -1,
            'gpt4_limit': -1,
            'show_conversations': True,
            'show_userinfo': False,
            'reset_limit': True,
        })
        return resp.json().get('token_key')

    def generate_access_token_old(self):
        resp = requests.post(
            'https://auth0.openai.com/oauth/token',
            json={
                'redirect_uri': 'com.openai.chat://auth0.openai.com/ios/com.openai.chat/callback',
                'grant_type': 'refresh_token',
                'client_id': 'pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh',
                'refresh_token': self.refresh_token
            },
            headers={'Content-Type': 'application/json'},
            proxies=self.proxy)
        if resp.status_code == 200:
            access_token = resp.json().get('access_token')
            self.access_token = access_token
            self.save_token()
            return access_token

    def load_token(self):
        if os.path.exists(self.storage_path):
            with open(self.storage_path, 'r') as file:
                token_json = json.load(file)
                if not self.access_token:
                    self.access_token = token_json.get('access_token')
                if not self.refresh_token:
                    self.refresh_token = token_json.get('refresh_token')
                if not self.device_token:
                    self.device_token = token_json.get('device_token')

    def save_token(self):
        with open(self.storage_path, 'w') as file:
            json.dump({
                'device_token': self.device_token,
                'refresh_token': self.refresh_token,
                'access_token': self.access_token
            }, file, indent=2)


@click.command()
@click.option('--proxy', "-p", help='A http proxy str. (http://127.0.0.1:8080)', required=False)
@click.option("--refresh_token", "-r", help='Get refresh token.', is_flag=True)
@click.option("--access_token", "-a", help='Get access token.', is_flag=True)
@click.option("--sess_key", "-s", help='Get sess key.', is_flag=True)
@click.option("--share_token", "-f", help='Get share key.', is_flag=True)
def cli(proxy, refresh_token, access_token, sess_key, share_token):
    if proxy:
        obj = TokenManager(proxy=proxy)
    else:
        obj = TokenManager()
    if refresh_token:
        print({"refresh_token": obj.get_refresh_token()})
    if access_token:
        _access_token = obj.get_access_token()
        payload = _access_token.split('.')[1]
        payload = payload + '=' * - (len(payload) % - 4)
        exp = json.loads(base64.b64decode(payload).decode()).get('exp')
        print({"access_token": obj.get_access_token(), 'expired': to_time(exp)})
    if sess_key:
        print(obj.get_sess_key())
    if share_token:
        unique_name = ''.join(random.sample(string.ascii_letters + string.digits, 16))
        print({"share_token": obj.generate_share_token(unique_name), "unique_name": unique_name})


if __name__ == '__main__':
    cli()
```

## preauth_cookie如何生成？

1. 准备一台ios设备，想办法获取device token，详见[官方文档](https://developer.apple.com/documentation/devicecheck/dcdevice/generatetoken(completionhandler:))

2. 准备一个能访问openai的代理，发起以下请求即可得到preauth_cookie（device_id可自行修改）

   ```python
   rsp = requests.post(
       'https://ios.chat.openai.com/backend-api/preauth_devicecheck',
       json={
           "bundle_id": "com.openai.chat",
           "device_id": "12345678-042E-45C7-962F-AC725D0E7770",
           "device_token": "your device token",
           "request_flag": True
       },
       proxies={'all': 'http://127.0.0.1:8080'}
   )
   if rsp.status_code == 200:
       print(rsp.cookies['_preauth_devicecheck'])
   ```

完整源码和打包程序见github：
https://github.com/qy527145/openai_token

食用方法：
1. 准备一个能上openai的http代理
2. 命令行执行 `openai_token -p http://proxyserver:port -rsa`
3. 输出token信息，同时会自动将`refresh token` 和`access_token`保存到 token.json文件
{% endfolding %}

3. 少量的 Refresh Token 获取可以[联系我](https://t.me/jerryzyg)

# 生成 Access/Share Token

进入 https://tokens.jerryz.com.cn/ ，在文本框中填入 Refresh Token（可以填入多个Tokens，用英文逗号`,`隔开即可），点击获取按钮，即可得到四个链接，前两行分别是 Access Tokens 和 Share Tokens 的链接，格式为 txt ，一行一个 Tokens。第三行和第四行分别是共享站点和自用站点的链接，访问后可以从你的号池中随机抽取 Share Tokens 进行访问，共享站点默认开启会话隔离和临时聊天。

**请妥善保管这四个链接，链接中随机生成的的8位ID是您访问 Token 和后续新功能的唯一方式**

每七天，文件中的 Token 就会自动刷新一次，无需手动操作

# 上传到 [Shared Chat 共享站](https://shared.oaifree.com/)

点击复选框后，填入你的昵称（需要符合正则表达式 `[0-9a-zA-Z_\- ]{0,11}` ），就可以将 Refresh Tokens 上传到始皇的公益 [Shared Chat 共享站](https://shared.oaifree.com/)，你可以前往 https://shared.oaifree.com/dashboard 查看提交情况。

# 可以使用 Tokens 的项目

1. https://new.oaifree.com/ ：OpenAI镜像站
2. https://tts.jerryz.com.cn/ ：OpenAI TTS 文本转语音（需要Plus账号）
3. https://github.com/nianhua99/PandoraHelper ：轻松使用 Pandora 并在网页中管理所有Token
4. https://chat2api.jerryz.com.cn/ : 用法同 OpenAI API ，API Key 传 `id=` 加上你的 id 即可（需要Plus账号）
5. https://github.com/jyx04/oaifree-helper : 组建合租共享车队，包含直链登陆、前端登陆页、用户管理、token池管理、车队管理、用户注册、用量查询等等功能。
……

# Todo

- {% checkbox checked, 利用 Tokens 建立用户自己的共享站}
- {% checkbox checked, （可选）自动将 Share Tokens 上传到始皇的 Share 站}
- {% checkbox checked, 实现通过 id 访问的 Chat2API}

# 隐私声明

- 由于需要定时刷新，所以用户输入的 Refresh Tokens 将会被上传到云端并加密保存
- 承诺不会出于任何目的，通过任何方式盗用、共享用户的 Refresh Tokens

## 吊销 Refresh Token

如果需要吊销 Refresh Token，可以通过以下方式：
1. 修改账户密码
2. 向以下地址发送 POST 请求：https://auth0.openai.com/oauth/revoke ，请求内容为json：
    ```json
    {
        "client_id": "pdlLIX2Y72MIl2rhLhTE9VV9bN905kBh",
        "token": "要吊销的refresh token"
    }
    ```

Code by [Jerry Zhou](https://jerryz.com.cn/), Powered by [Linux Do](https://linux.do/)