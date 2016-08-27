<!DOCTYPE html>
<html lang="en">
<head>
<#assign basePath=request.contextPath>
    <meta charset="UTF-8">
    <title>用户登录页面</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="stylesheet" href="${basePath}/css/amazeui.min.css"/>
    <link rel="stylesheet" href="${basePath}/css/login.css"/>
    <link rel="stylesheet" href="${basePath}/css/screen.css"/>
    <script src="${basePath}/js/jquery.min.js"></script>
</head>

<body>
<div id="login-page">
    <div class="am-container">
        <form class="form-login am-form" action="login.shtml" method="post" id="loginForm">
            <h2 class="form-login-heading">同享营采购平台</h2>
            <div class="login-wrap">
                <div class="am-input-group">
                    <span class="am-input-group-label"><i class="am-icon-user am-icon-fw"></i></span>
                    <input type="text" class="am-form-field required" name="userName" placeholder="用户名"/>
                </div>
                <div class="error-style"></div>
                <div class="am-input-group">
                    <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>
                    <input type="text" class="am-form-field required" placeholder="密码"/>
                </div>
                <div class="error-style"></div>
                <div class="am-form-group">
                    <label for="doc-ipt-3" class="checkbox">
                        <a>忘记密码？</a>
                    </label>
                </div>
                <div class="am-form-group">
                    <div class="error-text">
                        <span>${error?default('')}</span>
                    </div>
                </div>
                <button class="am-btn am-btn-primary am-btn-block btn-radius" style="" onclick="login()"> 登 录</button>
            </div>
        </form>
        <input type="hidden" value="${error?default('')}" id="errorMessage">
    </div>
</div>
<script src="${basePath}/js/jquery.validate.js"></script>
<script src="${basePath}/js/jquery.backstretch.min.js"></script>
<script>
    $.backstretch("images/login-bg.jpg", {speed: 500});
    $(function(){
        $("#loginForm").validate({
            errorPlacement:function(label,element){//设置错误信息
                label.appendTo(element.parent().next());
                element.parent().next().css("display","block");
                element.parent().addClass("am-form-error");
            },
            success: function(label) {  //验证通过回调
                label.parent().css("display","none");
                label.parent().prev().removeClass("am-form-error");
            }
    });
        if($("#errorMessage").val() != ''){
            $(".error-text").css("display","block");
        }
    });
    function login(){
        if($("#loginForm").valid()){
            return;
        }
        $("#loginForm").submit();
    }
</script>
</body>
</html>
