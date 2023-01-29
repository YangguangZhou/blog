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

![vercel.com](https://mydrive.jerryz.com.cn/Photos/28fde367a401c7f6d158f7eec00f9dfb.png)

点击Start Deploying，使用GitHub登录
进入 https://vercel.com/account/tokens ，按下图的设置进行配置

![配置](https://mydrive.jerryz.com.cn/Photos/110d948ff58b67670ab81d911b497c89.png)

点击Create，然后复制自己的token

打开 https://scfonedrive.github.io/Vercel/Deploy.html 

在3.的文本框中输入刚刚的token

从
https://github.com/qkqpttgf/OneManager-php/archive/refs/heads/master.zip 下载文件，再上传至2.中

在4.中填上项目的名称，然后点击Deploy

![配置](https://mydrive.jerryz.com.cn/Photos/2911375011610061a1b711807b9decd1.png)

部署成功后，打开提供的链接，按照提示设置密码
到此，网盘就算部署完成了

# 网盘配置

进入刚刚部署好的网盘，点击左上角登录，输入密码。

然后点击左上角管理-设置

选择想要新建的网盘，点击添加盘

![设置界面](https://mydrive.jerryz.com.cn/Photos/7228653f4d3a3651ff41d1b4e8bd12af.png)

## OneDrive、GoogleDrive

为网盘起好名字后，在接下来跳出的界面中登录OneDrive/Google账号即可

## 阿里云盘

打开 https://alist.nn.ci/zh/guide/drivers/aliyundrive.html ，点击获取Token，接下来扫描弹出的二维码即可获取refresh token。再回到网盘，新建阿里云盘，输入刚刚获取的refresh token即可

![获取Token](https://mydrive.jerryz.com.cn/Photos/Screenshot_20230129-210624.png)

最后，个人网盘就大功告成了
你还可以自己探索设置中的更多选项，也可以在Vercel中绑定个人域名

我的个人网盘： https://drive.jerryz.com.cn/ 

![我的个人网盘](https://mydrive.jerryz.com.cn/Photos/f9d0bf8a2423657714fec0906833a84c.png)

你也可以在[这里](https://drive.jerryz.com.cn/Drive/%E8%AE%BF%E5%AE%A2/)自由上传文件，把这里当作你的图床
