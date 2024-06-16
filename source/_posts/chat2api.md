---
title: OpenAI Chat2API 现已支持多账号负载均衡和通过 Refresh Token 请求
categories:
  - AI
date: '2024/06/16 22:34:39'
keywords: 'OpenAI,API,chat2apiChatGPT,PandoraNext,AI,OpenAI,RefreshToken,Neo,始皇,AccessToken,ShareToken'
tags:
  - 编程
  - AI
  - ChatGPT
  - LLM
hidden: true
cover: 'https://img.examcoo.com/ask/7386438/202406/171749993128340.png'
main_color: '#c0d7f7'
abbrlink: 57524
---

# 通过 Refresh Token 请求（推荐）

1. 参考 [优雅地通过 OpenAI Refresh Token 自动获取 Access/Share Token](https://blog.jerryz.com.cn/article/refresh-token/) 获取 Refresh Token，并前往 tokens.jerryz.com.cn 获取八位ID

2. 按照 OpenAI API 的格式发送请求，将 API Key 设置为 `id=` 加上您的八位数ID

通过此方法请求时，支持使用多个 Refresh Token 实现多账号负载均衡，在获取八位ID时一起输入并用逗号隔开即可，但是不支持同时输入多个ID

# 通过 Access Token 请求

按照 OpenAI API 的格式发送请求，将 API Key 设置为 Access Token，多个 Token 间用逗号隔开即可。

通过此方法请求时，支持使用多个 Access Token 实现多账号负载均衡，但是 Access Token 有七天的时间限制，无法自动刷新

# 请求示例

```sh
```

# 说明

- 该服务来自始皇的 [Chat2API](https://api.oaifree.com/)，文章作者只是对其稍加修改，添加了部分功能
- 多账号负载均衡依赖于随机数功能，并不能保证发送到每个账号的请求数量完全均等

Code by [Jerry Zhou](https://jerryz.com.cn/), Powered by [Linux Do](https://linux.do/)