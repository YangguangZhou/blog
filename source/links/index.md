---
title: 友链 
type: links
top_img: https://img.examcoo.com/ask/7386438/202111/163673216190400.jpg
---

# 友链

<div id="qexo-friends"></div>
<link rel="stylesheet" href="https://unpkg.com/qexo-static@1.6.0/hexo/friends.css"/>

<script src="https://unpkg.com/qexo-static@1.6.0/hexo/friends.js"></script>
<script>loadQexoFriends("qexo-friends", "https://qexo.jerryz.com.cn")</script>

# 申请友链

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
                    <input class="input" type="text" placeholder="您的站点名称" id="friend-name" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-signature"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">链接</label>
            <div class="control has-icons-left">
                <input class="input" type="url" placeholder="您的站点主页链接" id="friend-link" required>
                <span class="icon is-small is-left">
                    <i class="fas fa-link"></i>
                </span>
            </div>
            <p class="help ">请确保站点可以访问！</p>
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
                    <input class="input" type="text" placeholder="请用一句话描述您的站点。" id="friend-des" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-info"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" id="friend-check"/> 我提交的信息是真实的。
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
        alert("请勾选\"我提交的信息是真实的\"");
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
        type: 'get',
        cache: false,
        url: url,
        dataType: "jsonp",
        async: false,
        processData: false,
        complete: function (data) {
            if(data.status==200){
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
                }
            });}
            else{
                alert("无法访问URL！");
            }
            event.target.classList.remove('is-loading');
        }
    });
}
</script>