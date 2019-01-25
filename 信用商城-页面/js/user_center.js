$(function(){
    /* 选项卡 */
    $('.centL_ul li').click(function(){
        var $index = $(this).index();
        $(this).addClass('bgColor_active').siblings('li').removeClass('bgColor_active');
        $('.cent_right .user_c').eq($index).show().siblings('.user_c').hide();
    })

    /* 我的订单 */
    $('.myOrder_title li').hover(function(){
        $(this).addClass('bot_active').siblings("li").removeClass('bot_active');
    })
    
    /* 用户中心 */
    //修改
    $('.update_yh').click(function(){
        $('.removeBor').removeAttr("readonly");
        $('.removeBor').addClass('addBor');
        $('.removeBor').blur(function(){
            $(this).removeClass('addBor');
        })
    })
     /* 分享 */
    $('.share_a').click(function(){
        $('.cc_bg').css("display","block");
        $('.tk_share').css("display","block");
    })
    $('.close').click(function(){
        $('.cc_bg,.tk_share').css("display","none");
    })

    /* 我的订单 */
    $('.myOrder_sp01 img').click(function(){
        $(this).parents('.myOrder_spXX').remove();
        if($('.myOrder_spXX').length == 0){
            $('.my_dd').remove();
        }
    })
    $('.SH_delete').click(function(){
        $(this).parents('li').remove();
        if($('.consignee li').length == 0){
            $('.shipAddress_title').remove();
            $('.consignee').remove();
        }
    })
    /* 修改密码 */
    $('.xYb').click(function(){
        $('.up_pass').addClass('up_pass_active');
        $('.update_content').hide();
        $('.update_content02').show();
    })
    $('.qu_update').click(function(){
        $('.up_good').addClass('up_good_active');
        $('.update_content02').hide();
        $('.update_content03').show();
    })
})