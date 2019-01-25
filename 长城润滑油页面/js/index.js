$(function(){
    /* 幻灯片 */
    var $index = 0;
    $('.circle li').click(function(){
        $index =$(this).index();
        $(this).addClass('cur').siblings('li').removeClass('cur');
        $('.slides li').eq($index).fadeIn(1000).siblings('li').hide();
    })
    function autoPlay(){
        timer = setInterval(function(){
            $index++;
            if($index>2){
                $index=0;
            }
            $('.slides li').eq($index).fadeIn(1000).siblings('li').hide();
            $('.circle li').eq($index).addClass('cur').siblings('li').removeClass('cur');
        },2000)
    }
    autoPlay();
/* hover小圆点时清除自动轮播 */
    $('.circle li').hover(function(){
        clearInterval(timer);
    },function(){
        autoPlay();
    })

    /* top排行榜 */
    $('.shpTop li').hover(function(){
        $(this).children('.xlm').hide().siblings('.spHover').show();
    },function(){
        $(this).children('.spHover').hide().siblings('.xlm').show();
    })
    //图片移动效果
    var rank_move_time  = 300;//偏移时速
    var rank_move_range = 13;
    $(".wbl_img").hover(
        function(){
            $(this).stop().animate({"marginLeft":-rank_move_range},rank_move_time);
        },
        function(){
            $(this).stop().animate({"marginLeft":0},rank_move_time);
        }
    );

/* 飘窗*/
    $(document).scroll(function() {
        $(".cc_Tg").animate({"top":250+document.documentElement.scrollTop},20);
    });
    $('.cc_Tg').click(function(){
        $('.cc_backBg').show();
        $('.cc_tck').show();
    })
    $('.cc_close').click(function(){
        $('.cc_backBg').hide();
        $('.cc_tck').hide();
    })
})
