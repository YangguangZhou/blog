---
title: 通过GitHub Workflow实现网站防休眠
date: '2024/06/16 11:49:21'
categories:
  - 编程
tags:
  - 编程
  - GitHub
cover: 'https://img.examcoo.com/ask/7386438/202406/171851122817340.png'
keywords: '自动,防休眠,GitHub,Workflow,Huggingface,Render'
abbrlink: 44121
description: 了解如何通过GitHub Workflow实现网站防休眠，使用自动访问脚本保持网站在线，防止因长时间未访问而被休眠。
main_color: "#d0ced2"
ai: 这篇文章介绍了如何通过GitHub Workflow实现网站防休眠。文章首先说明了背景，即许多平台上部署的网站会自动休眠。接着提供了详细代码，展示了如何通过定期向网站发送访问请求来避免休眠。代码部分包括设置Python环境、安装requests库以及运行自动访问脚本。此外，文章还介绍了如何调整运行时间的cron表达式，并详细解释了cron表达式的格式和特殊符号。
---

# 背景

在许多平台上部署的网站都会有自动休眠的限制，为了解决这一问题，我们可以利用 GitHub Actions 的自动化功能，定期向我们的网站发送访问请求，从而避免网站被自动休眠。

# 代码

在Github仓库的 `.github/workflows` 中新建一个名为 `auto-visit.yml` 的文件，并修改 `websites` 变量的内容即可实现自动运行。

```yml
name: Auto Visit Websites

on:
  schedule:
    - cron: '0 */12 * * *'  # 每12小时执行一次
  workflow_dispatch:

jobs:
  auto-visit-websites:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.x

    - name: Install requests library
      run: pip install requests

    - name: Auto Visit Websites
      run: |
        echo "
        import requests

        websites = [
            'https://jerryz.com.cn',
            'https://blog.jerryz.com.cn'
            # 添加更多网站
        ]

        def check_website(url):
            try:
                response = requests.get(url)
                if response.status_code == 200:
                    print(f'Website {url} is up.')
                else:
                    print(f'Website {url} returned status code {response.status_code}.')
            except requests.exceptions.RequestException as e:
                print(f'An error occurred while checking {url}: {e}')

        for website in websites:
            check_website(website)
        " > auto_visit_websites.py
        python auto_visit_websites.py
```

# 更多配置

如果需要调整运行时间，可以修改 `cron` 表达式。例如，防止Huggingface休眠可以使用 `0 */12 * * *`，而防止Render休眠可以使用 `*/13 * * * *`。

{% folding Cron 详细规则 %}
## Cron表达式格式

```
* * * * *
| | | | |
| | | | ----- 星期几 (0 - 7) (0或7表示周日)
| | | ------- 月份 (1 - 12)
| | --------- 每月第几天 (1 - 31)
| ----------- 小时 (0 - 23)
------------- 分钟 (0 - 59)
```

## 特殊符号

- `*`：表示该字段的每个可能的值。
- `,`：用于列出多个不连续的值 (如`1,3,5`)
- `-`：用于定义一个值的范围 (如`1-5`)
- `/`：用于指定时间的间隔频率 (如`*/5`表示每5个单位)

## 特殊字符串

- `@reboot`：系统启动时执行
- `@yearly`：每年一次，相当于`0 0 1 1 *`
- `@monthly`：每月一次，相当于`0 0 1 * *`
- `@weekly`：每周一次，相当于`0 0 * * 0`
- `@daily`：每天一次，相当于`0 0 * * *`
- `@hourly`：每小时一次，相当于`0 * * * *`

## 示例

- `0 0 * * *`：每天午夜执行一次
- `*/15 * * * *`：每15分钟执行一次
- `0 9 * * 1`：每周一上午9点执行
- `0 0 1 1 *`：每年1月1日午夜执行一次
{% endfolding %}