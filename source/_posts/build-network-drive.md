---
title: 利用 Vercel+OneManager 搭建个人网盘
cover: 'https://img.examcoo.com/ask/7386438/202302/167610403813040.png'
date: '2023/01/29 21:32:58'
categories:
  - 网站
tags:
  - 网站
keywords: 'Vercel,网站,OneManager,网盘,云盘'
abbrlink: 30026
description: '本文介绍利用Vercel平台和OneManager程序搭建个人网盘的方法。文章首先介绍了Vercel和OneManager,接着列出了搭建所需的准备工作,然后详细讲解了在Vercel上部署OneManager的具体步骤,以及如何配置OneDrive、GoogleDrive和阿里云盘等不同存储方式。最后,作者分享了成功搭建的个人网盘,展示了其功能。通过这种方法,可以零成本拥有一个功能完善的个人网盘。'
ai: 这篇文章介绍了如何使用Vercel和OneManager搭建一个零成本的个人网盘。首先解释了Vercel的基本功能和OneManager的特点。然后，文章详细说明了部署个人网盘的具体步骤，包括使用GitHub账号注册Vercel、配置访问令牌、上传项目文件、部署项目以及如何连接至OneDrive、GoogleDrive或阿里云盘等服务。最后，还提及了如何配置网盘，包括添加云盘服务、设置密码和绑定个人域名等操作，以及作者自己搭建的个人网盘实例。
---

# 前言
目前网络上已经有了不少搭建个人网盘的方法。但作为一名学生党，资金并非那么充裕，无法购买私有云。于是我便找到了这种零成本搭建个人网盘的方法。

本文是基于Vercel的OneManager部署方法，其它方法请见： https://github.com/qkqpttgf/OneManager-php/blob/master/readme_cn.md 

# 介绍

## Vercel

[Vercel](https://vercel.com)是一个网站托管服务平台，开发者可以将自己的网络应用部署、托管在平台上运行，但是目前它提供的免费域名vercel.app已经被墙，需要魔法访问，但由其提供解析的域名依然可以正常访问

## OneManager

由[qkqpttgf大佬](https://github.com/qkqpttgf)编写的基于Serverless的OneDrive、阿里云盘、GoogleDrive云盘合集

GitHub地址： https://github.com/qkqpttgf/OneManager-php 

# 准备
1. GitHub账号（用于注册Vercel）
2. 魔法工具
3. OneDrive或GoogleDrive或阿里云盘账号
4. （最好有）个人的域名

# 具体方法
使用魔法访问 https://vercel.com

![vercel.com](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/3803468_cea08981_7318_6522_775@864x1489.png.m.5j403xz2ay.jpg)


点击Start Deploying，使用GitHub登录
进入 https://vercel.com/account/tokens ，按下图的设置进行配置

![配置](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/3803468_67dcb9f8_7318_6526_918@864x1478.png.m.8kzw560l2d.jpg)

点击Create，然后复制自己的token

打开 https://scfonedrive.github.io/Vercel/Deploy.html 

在3.的文本框中输入刚刚的token

从
https://github.com/qkqpttgf/OneManager-php/archive/refs/heads/master.zip 下载文件，再上传至2.中

在4.中填上项目的名称，然后点击Deploy

![配置](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/3803468_554ebd12_7318_6529_232@864x1221.png.m.9gwdkmacs0.jpg)

部署成功后，打开提供的链接，按照提示设置密码
到此，网盘就算部署完成了

# 网盘配置

进入刚刚部署好的网盘，点击左上角登录，输入密码。

然后点击左上角管理-设置

选择想要新建的网盘，点击添加盘

![设置界面](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/3803468_8fcb7896_7318_6533_472@1056x1132.png.m.5j403xzefl.jpg)

## OneDrive、GoogleDrive

为网盘起好名字后，在接下来跳出的界面中登录OneDrive/Google账号即可

## 阿里云盘

打开 https://alist.nn.ci/zh/guide/drivers/aliyundrive.html ，点击获取Token，接下来扫描弹出的二维码即可获取refresh token。再回到网盘，新建阿里云盘，输入刚刚获取的refresh token即可

最后，个人网盘就大功告成了
你还可以自己探索设置中的更多选项，也可以在Vercel中绑定个人域名

我的个人网盘： https://drive.jerryz.com.cn/ 

![我的个人网盘](https://cdn.jerryz.com.cn/gh/YangguangZhou/picx-images-hosting@master/3803468_67528740_7318_6535_166@864x1357.png.m.2vejtl6fpy.jpg)
