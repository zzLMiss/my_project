$(function(){
    $('.love_p span').click(function(){
        var $index = $(this).index()
        $(this).addClass('span_bot').siblings('span').removeClass('span_bot');
        $('.love_content ul').eq($index).show().siblings('ul').hide();
    })
/* 联系我们 手机电话验证 */
    $('.us_phone').blur(function(){
        //手机正则
        var z_sj = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
        //固定电话
        var z_dh = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
        var $sj = $(this).val();
        if($sj.length !=11 && !z_sj.test($sj) || !z_sj.test($dh)){
            $(this).val("请输入正确号码");
        }
    })

    /* 特色产品 */
    //商品选择的hover
    $('.nav_tsUL li').hover(function(){
        $(this).addClass('colorGreed').siblings('li').removeClass('colorGreed');
    })
    //价格筛选
    $('.price_tsLi input').keyup(function(){
        /* 获取input元素的内容，并判断不是number和，就为空 */
        var zValue = $(this).val().replace(/[^(\d)|(,)]/,'');
        $(this).val(zValue);
    })

})