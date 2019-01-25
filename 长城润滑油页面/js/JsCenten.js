$(function(){
    /* 结算中心 */
    /* 弹出修改地址*/
   	$('.xiuGai_a,.added_P').click(function(){
   		$('.cc_bg').show();
   		$('.XG_address').show();
   	})
   	$('.offSshpan').click(function(){
   		$('.cc_bg').hide();
   		$('.XG_address').hide();
   	})
   	/*修改收获地址*/
   	$('.put_SHR').blur(function(){
   		if($(this).val()==''){
   			$('.sh_person').show();
   		}else{
   			$('.sh_person').hide();
   		}
   	})
   	/*街道地址*/
   	$('.strAddress').blur(function(){
   		var $dz = $(this).val();
   		if($dz=='' || $dz.length<3){
   			$('.jd_address').show();
   			return false;
   		}else{
   			$('.jd_address').hide();
   		}
   	})
   	/*手机*/
   	$('.sj_put').blur(function(){
   		//手机正则
		var z_sj = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
   		var $sj = $(this).val();
   		//固定电话
   		var z_dh = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var $dh = $(".dh_put").val();
		if($sj.length==11 && z_sj.test($sj) ||z_dh.test($dh)){
			$('.true_p').hide();
		}else{
			$('.true_p').show();
		}
   	})
   	/*电话*/
   	$('.dh_put').blur(function(){
   		//手机正则
		var z_sj = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
   		var $sj = $('.sj_put').val();
   		//固定电话
   		var z_dh = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var $dh = $(this).val();
		if(z_dh.test($dh)|| $sj.length==11 && z_sj.test($sj) ){
			$('.true_p').hide();
		}else{
			$('.true_p').show();
		}
   	})
   	//邮政编码
   	$('.YzBM').blur(function(){
   		if($('.YzBM').val()=='' || $('.YzBM').val().length<6 ){
   			$('.YZBM_p').show();
   			return false;
   		}else{
   			$('.YZBM_p').hide();
   		}
   	})
   	
   	/*收货地址提交*/
   	$('.tj input').click(function(){
   		/*收货人*/
   		if($('.put_SHR').val()==''){
   			$('.sh_person').show();
   			return false;
   		}
   		/*地区*/
   		if($('.selectXZ_a').children('option:selected').val()=="请选择"){
   			$('#dz_p').show();
   			return false;
   		}
   		if($('.selectXZ_b').children('option:selected').val()=="请选择"){
   			$('#dz_p').show();
   			return false;
   		}
   		if($('.selectXZ_c').children('option:selected').val()=="请选择"){
   			$('#dz_p').show();
   			return false;
   		}
   		/*街道*/
   		var $dz = $('.strAddress').val();
   		if($dz=='' || $dz.length<3){
   			$('.jd_address').show();
   			return false;
   		}
   		/*邮政编码*/
   		if($('.YzBM').val()=='' || $('.YzBM').val().length<6 ){
   			$('.YZBM_p').show();
   			return false;
   		}
   		//手机正则
		var z_sj = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
   		var $sj = $('.sj_put').val();
   		//固定电话
   		var z_dh = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var $dh = $(".dh_put").val();
		if($sj.length!=11 && !z_sj.test($sj)){
			if(!z_dh.test($dh)){
				$('.true_p').show();
				return false;
			}
		}
		if(!z_dh.test($dh)){
			if($sj.length!=11 && !z_sj.test($sj)){
				$('.true_p').show();
				return false;
			}
		}
		
		return true;
   	})
    /*删除*/
    $('.del_a').click(function(){
        $(this).parent('.merPartyB').parent('.merParty').hide();
    })
    /*底色*/
    $('.merPartyB_mr').click(function(){
    	if(this.checked==true){
    		$(this).parents('.merParty').addClass('merParty_col').siblings('div').removeClass('merParty_col');
    	}
    })
    
})