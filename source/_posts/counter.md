---
abbrlink: 41528
ai: 这篇文章介绍了一个可嵌入Markdown文件或HTML网页的计数器项目“Counter”的使用方法与部署步骤。Counter项目托管在GitHub，支持通过URL参数自定义显示效果，如是否计入计数、字体大小、深色模式以及字体颜色等。文章还提供了使用不同编程语言发送API请求的示例代码，包括Python、JavaScript、Java、PHP、微信小程序，方便用户实现更复杂的功能。最后，文章说明了如何将项目部署到AirCode和Vercel平台上。
categories:
- 网站
cover: https://img.examcoo.com/ask/7386438/202312/170399415281190.png
date: 2023/11/15 16:24:01
description: 可以插入Markdown文件或HTML网页的计数器
hidden: ''
keywords: Hexo,网站,API,计数器,markdown,HTML
main_color: '#a08871'
tags:
- 网站
- API
title: Counter 计数器
---
# Counter 计数器

可以插入Markdown文件或HTML网页的计数器

[GitHub Repo](https://github.com/YangguangZhou/Counter)

![Vercel](https://vercel.jerryz.com.cn/api/YangguangZhou/Counter)

Powered by [Vercel](https://vercel.com/) and [Aircode](https://aircode.io/)

## 使用方法

将下方代码的 `name=` 后替换为自己的标识符，再插入到网页中即可。

1. **Markdown** （推荐）

   ```markdown
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter)
   ```

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter)
2. HTML

   ```html
   <img src="https://counter.jerryz.com.cn/counter?name=counter" alt="Counter">
   ```

   <img src="https://counter.jerryz.com.cn/counter?name=counter" alt="Counter">

代码块前后也可以插入文字，例如：

```markdown
您是该网页的第 ![Counter](https://counter.jerryz.com.cn/counter?name=counter) 位访客。
```

## 参数说明

1. 是否将当前显示计入计数器

   - 计入：`/counter`

     ```markdown
     ![Counter](https://counter.jerryz.com.cn/counter?name=counter)
     ```

     ![Counter](https://counter.jerryz.com.cn/counter?name=counter)
   - 不计入：`/view`

     ```markdown
     ![Counter](https://counter.jerryz.com.cn/view?name=counter)
     ```

     ![Counter](https://counter.jerryz.com.cn/view?name=counter)
2. 字体大小

   ```markdown
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&font=20)
   ```

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&font=20)
3. 深色模式（显示白色字体）

   ```markdown
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&dark=1)
   ```

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&dark=1)
4. 自定义颜色

   color后面的值为16进制颜色代码（不含 `#`）或rgb(a)颜色代码（不含空格）

   ```markdown
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=279cff)
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=rgb(136,136,255))
   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=rgba(0,0,0,0.5))
   ```

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=279cff)

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=rgb(136,136,255))

   ![Counter](https://counter.jerryz.com.cn/counter?name=counter&color=rgba(0,0,0,0.5))

## API

以下是使用不同编程语言发送 API 请求的示例代码：

1. Python:

```python
import requests

url = "https://counter.jerryz.com.cn/api/counter"
name = "your_variable_here"
data = {"name": name}

response = requests.post(url, json=data)
times = response.json()["times"]
print(times)
```

2. JavaScript:

```javascript
const fetch = require('node-fetch');

const url = "https://counter.jerryz.com.cn/api/counter";
const name = "your_variable_here";
const data = { name };

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' },
})
  .then(response => response.json())
  .then(data => {
    const times = data.times;
    console.log(times);
  });
```

3. Java:

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class APIClient {
    public static void main(String[] args) {
        String url = "https://counter.jerryz.com.cn/api/counter";
        String name = "your_variable_here";
        String data = "{\"name\": \"" + name + "\"}";

        try {
            URL apiUrl = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            connection.getOutputStream().write(data.getBytes());

            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            String jsonResponse = response.toString();
            // Parse the JSON response and extract the "times" value
            // ...

            System.out.println(times);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

4. PHP:

```php
<?php
$url = "https://counter.jerryz.com.cn/api/counter";
$name = "your_variable_here";
$data = array("name" => $name);

$options = array(
    'http' => array(
        'header'  => "Content-type: application/json",
        'method'  => 'POST',
        'content' => json_encode($data),
    ),
);

$context  = stream_context_create($options);
$response = file_get_contents($url, false, $context);
$responseData = json_decode($response, true);
$times = $responseData["times"];

echo $times;
?>
```

5. 微信小程序:

```javascript
wx.request({
  url: 'https://counter.jerryz.com.cn/api/counter',
  method: 'POST',
  data: {
    name: 'your_variable_here'
  },
  header: {
    'Content-Type': 'application/json'
  },
  success: function (res) {
    const times = res.data.times;
    console.log(times);
  },
  fail: function (error) {
    console.log(error);
  }
});
```

在这些示例中，将 `your_variable_here` 替换为你实际想要发送的变量值。然后运行相应的程序以发送POST请求。如果要将当前请求计入计数器，`url` 使用 `https://counter.jerryz.com.cn/api/counter`。如果不将当前请求计入计数器，`url` 使用 `https://counter.jerryz.com.cn/api/view`

## 部署

1. 部署到AirCode

   [![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=YangguangZhou&repo=Counter&branch=main&path=Aircode&appname=counter)

   成功创建项目后，点击 `Deploy`，得到Aircode分配的域名（形如 `https://xxxx.us.aircode.run` ）。
2. 部署到Vercel

   [![Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/YangguangZhou/Counter)

   项目创建完成后，请点击 `Settings - Environment Variables` 进入环境变量配置页创建环境变量 `AIRCODE_DOMAIN`，填写为Aircode分配的域名。
