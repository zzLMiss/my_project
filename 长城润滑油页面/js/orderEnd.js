$(function(){
    /* 活动机制 */
    $('.content_nfr div:not(:first)').css('display','none');
    $('.content_nfLul li').click(function(){
        var $index = $(this).index();
        $(this).addClass('licLk').siblings('li').removeClass('licLk');
        $('.content_nfr div').eq($index).show().siblings('div').hide();
    })
    /* 列表页 */
    $('.jiaG_Div p').hover(function(){
        $(this).addClass('jiaG_DivAH').siblings('p').removeClass('jiaG_DivAH');
    })
    $('.sequPrctL_ul li a').hover(function(){
        $(this).addClass('tsHover').parent('li'). siblings('li').children('a').removeClass('tsHover');
    })
    $('.pr').hover(function(){
        $('.jiaG_Div').show();
    },function(){
        $('.jiaG_Div').hide();
    })
   
})