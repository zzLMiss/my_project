 $(function(){
    //加
    $('.add').click(function(){
        var num = $(this).siblings('.input_number').val();//获取数量框里的数值
        num++;
        $(this).siblings('.input_number').val(num);
    })
    //减
    $('.minus').click(function(){
        var num = $(this).siblings('.input_number').val();//获取数量框里的数值
        if(num>1){
            num--;
            $(this).siblings('.input_number').val(num);
        } 
    })
    /* 收藏 */
    var flag = true;
    $('.share_div .like_sc').click(function(){
        if(flag){
            $(this).addClass('like_active');
            flag = false;
        }else{
            $(this).removeClass('like_active');
            flag = true;
        }
    })
  /* 分享 */
  $('.share_a').click(function(){
      $('.cc_bg').css("display","block");
      $('.tk_share').css("display","block");
  })
  $('.close').click(function(){
    $('.cc_bg,.tk_share').css("display","none");
  })
    //选项卡  产品介绍/产品规格
    $('.bk_titleR span').click(function(){
        var $index = $(this).index();
        $(this).addClass('span_bkXy').siblings('span').removeClass('span_bkXy');
        $('.bk_contentR div').eq($index).show().siblings('div').hide();
    })
})