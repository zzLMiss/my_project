$(function(){
    /* 清空购物车 */
    $('.clean_shop').click(function(){
        $('.cartTable,.sectPx').remove();
    })
    
   //计算总价，编写总价方法
   function totalPrice(){
       var sum = 0; //总价
       var count =0; //件
       $('.box').each(function(){
           if(this.checked == true){
                var all = parseFloat($(this).parent().siblings().children('.xiaoji').text());
                sum += all;
                count++;
           } 
       })
       $('.zsl').text(count);
       $('.heji').text(parseFloat(sum));
   };

   /* 输入件数 */
    $('.textNum').blur(function(){
        var num = $(this).val();//获取数量框里的数值
        var prices = $(this).parents('td').siblings('.dj').children('.price').html();//获取单价
        var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
        $(this).parent().parent().siblings().children('.xiaoji').text(xiaoji);//把得到的小计值放入数量框中显示
        totalPrice();//调用“总价”方法，使每点击减号，数量变化时，总价跟着变化

    })
    
    //减号逻辑
    $('.reduce').click(function(){
        var num =$(this).siblings('.textNum').val();//获取数量框里的数值
        if(num>1){
            num--;//单击“-”减号时，数量递减
            $(this).siblings('.textNum').val(num);//把数量变化后的新值放入数量框中
        }
        if(num<2){
            $(this).prop('disabled',true);//当输入框内数值为1时，使“-”减号处于不可用状态。
            $(this).removeClass('curaor_pointer');
            $(this).removeClass('colorFC0C0C');
        }
        var prices = $(this).parents('td').siblings('.dj').children('.price').html();//获取单价
        var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
        $(this).parent().parent().siblings().children('.xiaoji').text(xiaoji);//把得到的小计值放入数量框中显示
        totalPrice();//调用“总价”方法，使每点击减号，数量变化时，总价跟着变化
    })

    //加号逻辑
    $('.add').click(function(){
        var num = $(this).siblings('.textNum').val();
        num++;
        $(this).siblings('.textNum').val(num);
        if(num>1){ //prop() 方法设置或返回被选元素的属性和值
            $(this).siblings('.reduce').prop('disabled',false);//判断当输入框内数值大于1，使“-”减号处于解封可用状态。
            $(this).siblings('.reduce').css("cursor","pointer");
            $(this).siblings('.reduce').addClass('colorFC0C0C');
        } 
        var prices = $(this).parents('td').siblings('.dj').children('.price').html();
        var xiaoji = prices * num;
        $(this).parent().parent().siblings().children('.xiaoji').text(xiaoji);
        totalPrice();//调用“总价”方法，使每点击减号，数量变化时，总价跟着变化
    })
  
 /* 单选 */
    $(".box").click(function () {
        if(this.checked==true){
            $(this).parents('.shop_sp').addClass('col'); 
        }else{
            $(this).parents('.shop_sp').removeClass('col');
        }
        var len = $(".box").length;
        var checkedLen  = $(".box:checked").length;
        if(len  ==  checkedLen){
            $('.selectAll').prop('checked', true);
        }else{
            $('.selectAll').prop('checked', false);
        }
        totalPrice();
    })
    /* 全选 */
    $(".selectAll").click(function () {
        if(this.checked == true){
            $('.box').prop('checked', true);
            $('.selectAll').prop('checked', true);
            $('.shop_sp').addClass('col');
        }else{
            $('.box').prop('checked', false);
            $('.selectAll').prop('checked', false);
            $('.shop_sp').removeClass('col');
        }
        totalPrice();
    })

   //单行删除商品
   $('.delOne').click(function(){
       $(this).parent().parent().remove();
       totalPrice(); 
   })
   
   //选中删除
   $('.delAll').click(function(){
        $('.box').each(function(){
            if(this.checked == true){
                $(this).parents('.shop_sp').remove();
                $('.heji').text(0);
                $('.zsl').text(0);
            }
        })
   })
})
    