---
title: Hexo博客引用B站视频
cover: 'https://img.examcoo.com/ask/7386438/202112/163897318350010.png'
date: '2021/12/07 21:03:22'
categories:
  - 网站
  - 博客配置
tags:
  - 网站
  - Hexo
  - 博客配置
keywords: 'Hexo,butterfly,bilibili,哔哩哔哩,视频,博客,博客美化'
description: 如何在Hexo博客中插入bilibili视频
abbrlink: 15474
ai: 这篇文章介绍了如何在Hexo博客中嵌入B站视频。文章通过详细步骤和代码示例展示了将B站视频通过iframe标签以合适的尺寸和比例显示在博客文章中的过程。主要方法包括在iframe标签中添加CSS样式使视频响应式适应屏幕大小，并提供了如何防止视频被点击时跳转到B站、如何设置视频默认为最高质量等附加配置选项。此外，还介绍了B站视频链接的不同参数及其作用，帮助用户更好地自定义视频播放的相关设置。
---

# 引言

在进行引用B站用iframe方式引入视频时发现，通过默认的方式导入会使得屏幕很小。

![分享视频](https://img.examcoo.com/ask/7386438/202112/163888310546730.jpg)

## 效果

<div>
    <iframe src="//player.bilibili.com/player.html?bvid=BV1au411B7cf&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

# 方法

> - bilibili默认给的是一个iframe，在iframe中添加css样式：`style="position:absolute; height: 100%; width: 100%;"`
> - 在原来的iframe外面嵌套一层div，div添加样式：`style="position:relative; padding-bottom:75%"`

```markdown
<div style="position:relative; padding-bottom:75%; width:100%; height:0">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1au411B7cf&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position:absolute; height: 100%; width: 100%;"></iframe>
</div>
```

在`bvid`后填上视频的bv号即可。

## 效果

<div style="position:relative; padding-bottom:75%; width:100%; height:0">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1au411B7cf&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position:absolute; height: 100%; width: 100%;"></iframe>
</div>

# 原理
1. iframe本身不可自动伸缩
2. iframe宽度和高度设置为100%后，会尽可能的填充满它的父级元素
3. 所以在iframe外部嵌套一个div，只要这个div根据页面大小变化按比例变化，就可以实现了
4. iframe使用绝对位置`position: absolute`, 默认与父级div的左上角对齐
5. div使用相对位置，并且用`padding-bottom`，来计算相对父元素的宽度（父元素宽度的75%作为div的高度），100:75则为4:3

# 其它

## B站链接参数

| key | 说明 | 
| :-: | :-: |
| aid | 视频ID，即B站的av号 |
| bvid | 视频ID，即B站的bv号 |
| 单元格  | 单元格 |
| cid | 客户端的id,clientid的缩写。不填也不会有什么问题 |
| page | 第几个视频，也就是P几 |
| as_wide | 是否宽屏（1：宽屏，0：小屏） |
| high_quality | 视频质量（1：最高视频质量，0：最低视频质量）
| danmaku | 是否开启弹幕（1：开， 0：关闭） |

## 阻止跳转B站

在网页上, 用户选择清晰度, 或者点击视频上面的一些图标, 会跳转到B站. 这个可通过设置iframe的`sandbox`属性去禁止

添加`sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"`进行设置

### 效果

<div style="position:relative; padding-bottom:75%; width:100%; height:0">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1au411B7cf&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position:absolute; height: 100%; width: 100%;" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
</div>

## 修改视频质量

B站默认视频质量是最低的，可以通过在src的最后添加`&high_quality=1`来设置为最高视频质量

### 效果

<div style="position:relative; padding-bottom:75%; width:100%; height:0">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1au411B7cf&page=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position:absolute; height: 100%; width: 100%;"></iframe>
</div>
