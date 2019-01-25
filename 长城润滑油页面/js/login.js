$(function(){
   $('#user,#password').focus(function(){
        $(this).css("background-color","#FDF6C8");
        $(this).siblings("span").show();
    }).blur(function(){
        if($(this).val!=''){
            $(this).css("background-color","#fff");
            $(this).siblings("span").hide();
        }
    })
/*验证手机号 */
    $('#user').blur(function(){
        var username = $(this).val();
        var zz = {
            mobile: /^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/,
            email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
        };
        if(username == ''){
            $('.va').html('请输入账号');
        }else if(!zz.mobile.test(username) && !zz.email.test(username)){
            $('.va').html('请输入正确的手机号或邮箱').show();
        }else{
            $('.va').html('').hide();
        }
    })
    /* 验证密码 */
    $('#password').blur(function(){
        var password = $(this).val();
        var zz = {mobile: /^[a-zA-Z]\w{5,12}$/ };
         if(password == ''){
            $('.va02').html('请输入密码');
        }else if(!zz.mobile.test(password)){
            $('.va02').html('以字母开头，长度在6-8之间，只能包含字符、数字和下划线！').show();
        }else{
            $('.va02').html('');
        }
    }) 
})

    