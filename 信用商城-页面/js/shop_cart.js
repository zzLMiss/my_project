$(function(){
   //购物车
   //计算总价
   function totalPrice(){
	   var sum =0;//总价
	   var good = 0; //公益金额
	   $('.check').each(function(){
		   if(this.checked == true){
			   var all = parseFloat($(this).parents().siblings().children('.xj').text());
			   var good_z = parseFloat($(this).parents().siblings().children('.Good_amount').text());
			   sum += all;
			   good += good_z;
		   }
	   })
	   $('.total').text(parseFloat(sum));
	   $('.good_z').text(parseFloat(good));
   }
   /* 输入件数 */
   $('.textNum').blur(function(){
		var num = $(this).val();//获取数量框里的数值
		var prices = $(this).parents('td').siblings().children('.price').html();//获取单价
		var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
		var Good_amount = xiaoji *0.1;
		$(this).parents('td').siblings().children('.xj').text(xiaoji);//把得到的小计值放入数量框中显示
		$(this).parents('td').siblings().children('.Good_amount').text(Good_amount);
		totalPrice();//调用“总价”方法，使每点击减号，数量变化时，总价跟着变化
	})

	//减号逻辑
	$('.reduce').click(function(){
		var num = $(this).siblings('.textNum').val();
		if(num>1){
			num--;
			$(this).siblings('.textNum').val(num);
		}
		if(num<2){
			$(this).children('i').text('');
			$(this).removeClass('.curaor_pointer');
		}
		var prices = $(this).parents('td').siblings().children('.price').html();//获取单价
		var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
		var Good_amount = xiaoji *0.1;
		$(this).parents('td').siblings().children('.xj').text(xiaoji);//把得到的小计值放入数量框中显示
		$(this).parents('td').siblings().children('.Good_amount').text(Good_amount);
		totalPrice();
	})
	//加号逻辑
	$('.add').click(function(){
		var num = $(this).siblings('.textNum').val();
		num++;
		$(this).siblings('.textNum').val(num);
		if(num>1){
			$(this).siblings('.reduce').children('i').text('-');
			$(this).siblings('.reduce').addClass('.curaor_pointer');
		}
		var prices = $(this).parents('td').siblings().children('.price').html();//获取单价
		var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
		var Good_amount = xiaoji *0.1;
		$(this).parents('td').siblings().children('.xj').text(xiaoji);//把得到的小计值放入数量框中显示
		$(this).parents('td').siblings().children('.Good_amount').text(Good_amount);
		totalPrice();
	})

	//单选
	$(".dx").addClass("default_inp");	
	$(".qx").addClass("default_inp");
	$(".check,.checkbox").removeAttr("checked");
	$('.dx').click(function(){
		if($(this).hasClass("default_inp") ){
			$(this).removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
		}else{
			$(this).addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
		}
		var len = $('.check').length;
		var checkedLen  = $(".check:checked").length;
		if(len == checkedLen){
			$('.qx').addClass('select_inp').siblings('input').attr("checked","checked");
		}else{
			$('.qx').removeClass('select_inp').siblings('input').removeAttr("checked");
		}
		totalPrice();
	})

	//全选
	$('.qx').click(function(){
		if( $(this).hasClass("default_inp") ){
			$(this).removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
			$(".qx,.dx").removeClass("default_inp").addClass("select_inp").siblings("input").attr("checked","checked");
		}else{
			$(this).addClass("default_inp").removeClass("select_inp").siblings("input").removeAttr("checked");
			$(".qx,.dx").removeClass("select_inp").addClass("default_inp").siblings("input").removeAttr("checked");
		}
		totalPrice();
	})
   //删除
   $('.delOne').click(function(){
		$(this).parents('tr').remove();
		if($('.dx').length == 0){
			$('.shopCart').hide();
			$('.emptyContent').show();
		}
   })

   //批量删除
   $('.batch_Delete').click(function(){
	   $('.shopCart tbody .dx').each(function(){
			if($(this).hasClass('select_inp')){
				$(this).parents('tr').remove();
			}
	   })
	   if($('.qx').hasClass('select_inp')){
		   $('.shopCart').hide();
		   $('.emptyContent').show();
	   }
   })
});
 

   
  