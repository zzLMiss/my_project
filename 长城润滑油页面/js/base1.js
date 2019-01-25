// JavaScript Document
$(function(){
	//输入关键字
	$(".keyword_lf").focus(function(){
        /* defaultValue 属性设置或返回文本框的初始内容。 */
        if($(this).val() == this.defaultValue){  
            $(this).val('').css("color","#333");           
        } 
    }).blur(function(){
        if ($(this).val() == '') {
            $(this).val(this.defaultValue).css("color","#717371");
        }
    });	

	
	
    //返回顶部JS
    var $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body")).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
        //定义了两个变量：scrollTop()设置垂直滚动条的值     获取window的高
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide(); //高度大于0就显示，否则隐藏
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });

});