---
title: GitHub访问加速
cover: https://img.examcoo.com/ask/7386438/202112/163868409645050.png
date: 2021/12/04 11:33:23
categories:
- 编程
tags:
- GitHub
- Windows
- 编程
keywords: GitHub,Windows,编程,加速
---

# 背景

> GitHub在国内访问速度慢的问题原因有很多,但最直接和最主要的原因是GitHub的分发加速网络的域名遭到DNS污染,下载网站上任何东西的时候会下半天,有时还会失败需要从头再来,多失败了几次又因访问次数过多被做了ip限制,让人恼火

# 原理

通过修改系统hosts文件的办法，绕过国内DNS解析，直接访问GitHub的CDN节点，从而达到GitHub访问加速的目的。不需要海外的服务器辅助。

做到以上需要三步：

1. 获取GitHub官方CDN地址
2. 修改系统hosts文件
3. 刷新系统DNS缓存

# 方法

## 获取GitHub官方CDN地址

我已经获取好了GitHub的CDN地址

```
140.82.121.3  github.com
140.82.121.3  gist.github.com
185.199.110.153 assets-cdn.github.com
185.199.108.133 raw.githubusercontent.com
185.199.111.133 gist.githubusercontent.com
185.199.110.133 cloud.githubusercontent.com
185.199.111.133 camo.githubusercontent.com
185.199.111.133 avatars0.githubusercontent.com
185.199.110.133 avatars1.githubusercontent.com
185.199.111.133 avatars2.githubusercontent.com
185.199.109.133 avatars3.githubusercontent.com
185.199.108.133 avatars4.githubusercontent.com
185.199.111.133 avatars5.githubusercontent.com
185.199.109.133 avatars6.githubusercontent.com
185.199.109.133 avatars7.githubusercontent.com
185.199.110.133 avatars8.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com
185.199.111.154 github.githubassets.com
185.199.109.133 user-images.githubusercontent.com
140.82.112.9 codeload.github.com
185.199.110.133 favicons.githubusercontent.com
192.30.255.116 api.github.com
```

但如果还有其它需要的话，可以访问[这里](https://www.ipaddress.com/)

## 修改系统hosts文件

打开 `C:\Windows\System32\drivers\etc`

如果看得到hosts，可以[跳过](http://localhost:4000/article/github-speed-up/#%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6%E5%A4%B9%E5%AE%8C%E5%85%A8%E6%8E%A7%E5%88%B6%E6%9D%83%E9%99%90)这一步

### 显示隐藏的文件

#### Win11

文件资源管理器-查看-显示-隐藏的项目

![Win11显示隐藏的文件](https://img.examcoo.com/ask/7386438/202112/163858998196310.jpg)

#### Win10或Win7

1. 从任务栏中打开文件资源管理器。 

2. 选择“视图”>“选项”>“更改文件夹和搜索选项”。

3. 选择“视图”选项卡，在“高级设置”下选择“显示隐藏的文件、文件夹和驱动器“，然后选择“确定”。

### 打开文件夹“完全控制”权限

1. 右击hosts文件，选择“属性”

2. 打开“安全”选项卡，点击“编辑”

    ![属性](https://img.examcoo.com/ask/7386438/202112/163859038069680.jpg)

3. 在“组或用户名中”选中“Users”，在“Users的权限”中勾选“完全控制”，点击“确定”

    ![权限](https://img.examcoo.com/ask/7386438/202112/163859038762490.jpg)

### 修改文件

接下来就可以正常打开并编辑hosts文件了

在文件末尾插入以下几行代码并保存

```
140.82.121.3  github.com
140.82.121.3  gist.github.com
185.199.110.153 assets-cdn.github.com
185.199.108.133 raw.githubusercontent.com
185.199.111.133 gist.githubusercontent.com
185.199.110.133 cloud.githubusercontent.com
185.199.111.133 camo.githubusercontent.com
185.199.111.133 avatars0.githubusercontent.com
185.199.110.133 avatars1.githubusercontent.com
185.199.111.133 avatars2.githubusercontent.com
185.199.109.133 avatars3.githubusercontent.com
185.199.108.133 avatars4.githubusercontent.com
185.199.111.133 avatars5.githubusercontent.com
185.199.109.133 avatars6.githubusercontent.com
185.199.109.133 avatars7.githubusercontent.com
185.199.110.133 avatars8.githubusercontent.com
185.199.108.133 avatars.githubusercontent.com
185.199.111.154 github.githubassets.com
185.199.109.133 user-images.githubusercontent.com
140.82.112.9 codeload.github.com
185.199.110.133 favicons.githubusercontent.com
192.30.255.116 api.github.com
```

## 刷新系统DNS缓存

1. 右击任务栏上的“开始”按钮，打开“Windows终端（管理员）”

    ![打开Windows终端（管理员）](https://img.examcoo.com/ask/7386438/202112/163859100271740.jpg)

2. 再在命令行中输入 `ipconfig /flushdns` 来手动刷新系统DNS缓存

    ![手动刷新系统DNS缓存](https://img.examcoo.com/ask/7386438/202112/163859039979400.jpg)

**这样再次打开GitHub时就可以加速访问了**