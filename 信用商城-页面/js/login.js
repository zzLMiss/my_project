$(function(){
    /* 记住密码 */
    $('.put').click(function(){
        $(this).addClass("yin").siblings().removeClass('yin');
    })
/*验证手机号 */
    $('#user').blur(function(){
        var username = $(this).val();
        var zz = {mobile: /^(((13[0-9])|(14[5-7])|(15[0-9])|(17[0-9])|(18[0-9]))+\d{8})$/ };
        if(username == ''){
            $('.va').html('手机号不能为空');
        }else if(!zz.mobile.test(username)){
            $('.va').html('您的手机号格式不正确,请您重新输入');
        }else{
            $('.va').html('');
        }
    })
    /* 验证密码 */
    $('#password').blur(function(){
        var password = $(this).val();
        var zz = {mobile: /^[a-zA-Z]\w{5,12}$/ };
         if(password == ''){
            $('.va02').html('密码不能为空');
        }else if(!zz.mobile.test(password)){
            $('.va02').html('以字母开头，长度在6-8之间，只能包含字符、数字和下划线！');
        }else{
            $('.va02').html('');
        }
    }) 
    /* 注册 */
    $('.ZC_title ul li').click(function(){
        $(this).addClass('colorGreed').siblings('li').removeClass('colorGreed');
    })
    $('.ZC_cont .ZC_next').click(function(){
        $('.ZC_i02').addClass('ZC_i02_active');
        $('.ZC_cont').hide();
        $('.ZC_cont02').show();
    })
    $('.ZC_cont02 .ZC_next').click(function(){
        $('.ZC_i03').addClass('ZC_i03_active');
        $('.ZC_cont02').hide();
        $('.ZC_cont03').show();
    })
})

    