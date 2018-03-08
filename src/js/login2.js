require(["config"],function(){
	require(["jquery"],function($){
		$(".sj").click(function(){
			location="/html/login.html";
		});
		$("#uname").on("blur",function(){
			if(!/^[0-9]{11}$/.test($(this).val())&&$(this).val()!==null){
				$(".info1").html("手机格式有误");
			
			}else{
				$(".info1").html("格式正确");
			}
		});
		$("#password").on("blur",function(){
			if(!/^[a-z][a-z0-9]{6,12}$/.test($(this).val())){
				$(".info2").html("密码格式有误");
			}else{
				$(".info2").html("格式正确");
			}
		})
		
	})
})