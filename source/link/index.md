---
title: 友链 
top_img: false
type: "link"
---

# 友链

- class_name: 友链合集
  class_desc: 一起共同进步
  flink_style: anzhiyu
  link_list:
    - name: Links
      link: https://links.jerryz.com.cn/go
      avatar: https://cdn.jerryz.com.cn/gh/YangguangZhou/image@main/blog/24/4/Links.png
      descr: 友链合集
      recommend: true
    - name: 开往
      link: https://www.travellings.cn/go.html
      avatar: https://cdn.jerryz.com.cn/gh/YangguangZhou/image@main/blog/24/4/travelling.png
      descr: 友链相互接力

- class_name: 小伙伴
  class_desc: 那些人，那些事
  flink_style: anzhiyu
  link_list:
    - name: Efu
      link: https://www.efu.me/
      avatar: https://s3.qjqq.cn/47/660a7ece07609.webp!color
      descr: An Open Source worker.
    - name: gorpeln的个人博客 - gorpeln
      link: https://gorpeln.top/
      avatar: https://gorpeln.top/favicon.ico
      descr: 趁年轻，做自己想做的！
    - name: 冬天的小窝
      link: https://www.iamdt.cn/
      avatar: https://img.iamdt.cn/2023/09/26/6512ccfe73f56.png
      descr: 人生若只如初见，何事秋风悲画扇。
    - name: 安知鱼
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
    - name: 张洪Heo
      link: https://blog.zhheo.com/
      avatar: https://bu.dusays.com/2022/12/28/63ac2812183aa.png
      descr: 分享设计与科技生活
    - name: 马卡龙
      link: https://blog.bsw8.com/
      avatar: https://blog.bsw8.com/upload/bd0e3b556ab4ca8f95b1fb55ea959c04.jpg
      descr: 马卡龙的博客

<!-- # 申请友链

## 我的友链💕

> 站点名称：Jerry Zhou的博客
站点介绍：永远相信美好的事情即将发生
站点链接：https://blog.jerryz.com.cn
站点图标：https://img.examcoo.com/ask/7386438/202111/163626915705190.jpg

## 友链交换须知🥰
1. 友链网站必须为免费性质的**博客**。包括但不限于付费下载、付费浏览定义为非免费性质网站。一经发现，直接删除友联恕不通知。
2. 友链的申请请在下方进行申请，申请前请先添加本站的友链。
3. 友链的申请结果将会通过邮箱进行告知，请耐心等待。若长时间未显示，可以联系 i@jerryz.com.cn 。
4. 友链网站现在可以在中国大陆区域正常访问，内容符合中国大陆法律法规。
5. 友链将会被不定期进行检查，若出现违反以上的申请须知，我将会第一时间删除友链，恕不通知！


## 免责声明
本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。所以友链网站均可能存在风险，请知晓。

<link rel="stylesheet" href="https://cdn.jerryz.com.cn/gh/YangguangZhou/blog@main/source/links/links.css"/>

<article class="message is-info">
    <div class="message-header">
        申请友链
    </div>
    <div class="message-body">
        <div class="form-ask-friend">
            <div class="field">
                <label class="label">名称</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="您的网站名称" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">链接</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="您的网站主页链接" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">请确保网站可以访问！</p>
            </div>
            <div class="field">
                <label class="label">图标</label>
                <div class="control has-icons-left">
                    <input class="input" type="url" placeholder="您的网站图标" id="friend-icon" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-image"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">描述</label>
                <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="请用一句话描述您的网站。" id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> 我提交的信息不是无意义的。
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-info" type="submit" onclick="askFriend(event)">申请</button>
                </div>
            </div>
        </div>
    </div>
</article>
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
<script>
function TestUrl(url) {
    var Expression=/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp=new RegExp(Expression);
    if(objExp.test(url) != true){
        return false;
    }
    return true;
}
function askFriend (event) {
    let check = $("#friend-check").is(":checked");
    let name = $("#friend-name").val();
    let url = $("#friend-link").val();
    let image = $("#friend-icon").val();
    let des = $("#friend-des").val();
    if(!check){
        alert("请勾选\"我提交的信息不是无意义的\"");
        return;
    }
    if(!(name&&url&&image&&des)){
        alert("信息不完整！");
        return;
    }
    if (!(TestUrl(url))){
        alert("URL格式错误！需要包含HTTP协议头！");
        return;
    }
    if (!(TestUrl(image))){
        alert("图标URL格式错误！需要包含HTTP协议头！");
        return;
    }
    event.target.classList.add('is-loading');
    $.ajax({
        type: 'POST',
        dataType: "json",
        data: {
            "name": name,
            "url": url,
            "image": image,
            "description": des,
        },
        url: 'https://qexo.jerryz.com.cn/pub/ask_friend/',
        success: function (data) {
            alert(data.msg);
        },
        complete: function () {
            event.target.classList.remove('is-loading');
        }
    });
}
</script> -->