---
title: 白嫖 Sourcegraph Cody 的 GPT-4 和 Claude 3
cover: https://img.examcoo.com/ask/7386438/202405/171480471022220.jpg
date: 2024/05/04 14:25:01
keywords: Cody,Sourcegraph,免费,GPT3.5,GPT4,Claude,Claude Opus,Claude Sonnet,GPT-4
ai: 这篇文章介绍了如何免费获取Sourcegraph的Cody订阅，以及如何使用GPT-4和Claude 3模型。文章提供了详细的注册、开通会员、获取Access Token和使用方法。还列出了Pro用户支持的模型列表，并给出了API请求地址和建议的接口限制，包括Claude3 Sonnet/Opus模型、其他Anthropic模型和OpenAI模型的上下文长度和输出长度。最后，文章还分享了一个Access Token供读者体验并解答了一些常见问题。
categories:
- AI
main_color: '#4e4096'
tags:
- 编程
- AI
- 白嫖
---
分享一个白嫖 Sourcegraph 的 Cody 订阅的方法，支持 `gpt-4-turbo-preview`、`claude-3-opus-20240229` 和  `claude-3-sonnet-20240229` 等众多模型。

![1000048356](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/1000048356.8oji5t4oei.jpg)

# 注册

打开 https://sourcegraph.com/sign-in 进行注册，建议使用 GitHub 或 GitLab

# 开通会员

1. 进入 https://sourcegraph.com/cody/manage ，选择 Pro 计划进行订阅
2. 使用卡头 `542550330088xxxx` 进行订阅，地区任选，Google 一下对应的邮政编码即可（我选择的是日本 `Miyagi`，邮政编码 `9820000`）

# 获取 Access Token

1. 打开[设置](https://sourcegraph.com/settings)页面
2. 进入"Access tokens"页面
3. 点击"Generate new token"
4. 随便填写一个令牌名称，最后点击"Generate token"生成API令牌
5. 点击复制按钮或显示按钮，即可获取到一个以"sgp_"开头的API令牌

# 使用

可以进入 https://sgp-token.sotershield.com/ ，输入令牌查询当前令牌详细信息，Pro用户每日有250次的使用限额，Pro用户支持的模型列表如下：

```
anthropic/claude-3-haiku-20240307
anthropic/claude-3-sonnet-20240229
anthropic/claude-3-opus-20240229
fireworks/accounts/fireworks/models/mixtral-8x7b-instruct
fireworks/accounts/fireworks/models/mixtral-8x22b-instruct
openai/gpt-3.5-turbo
openai/gpt-4-turbo
openai/gpt-4-turbo-preview
anthropic/claude-2
anthropic/claude-2.0
anthropic/claude-2.1
anthropic/claude-instant-1.2-cyan
anthropic/claude-instant-1.2
anthropic/claude-instant-v1
anthropic/claude-instant-1
```

## API 请求地址

代理地址: https://sgp.sotershield.com/v1
密码: 你的Access Token（可输入多个，中间用 `,` 隔开）

## 建议接口限制

Claude3 Sonnet/Opus模型:

- 上下文长度: 30000 (不建议设置超过45000，否则可能会被上游接口拒绝该请求或封号)
- 输出长度: 4000

其他Anthropic模型:

- 上下文长度: 17700 (不建议设置超过此数值，建议设置更低的数值)
- 输出长度: 4000

OpenAI模型:

- 上下文长度: 不限制 (建议设置合适的范围，避免对账号造成风险)
- 输出长度: 4000

放一个Access Toekn给大家体验：`sgp_a0d7ccb4f752ea73_543862a4b3f687c888073f5b175972b6309760d4`

# 常见问题

1. 卡号错误：尝试更换卡号，可以使用 https://www.mrchecker.net/card-checker/ccn2/ 进行校验
2. 卡被拒绝：实际上是IP被拒。尝试更换梯子，确保IP更为纯净并且IP地址和账单地址相同
