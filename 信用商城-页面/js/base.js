$(function(){
    $('.nav li a').hover(function(){
        $(this).css({
            'background':"#fff",
            'color':'#07BD54'
        });
    },function(){
        $(this).css({
            'background':"#07BD54",
            'color':'#fff'
        });
    })

    //热销扶贫商品模块
	var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
         }
   });
})