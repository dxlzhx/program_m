$(document).ready(function() { 
    var default_search = "";
	if(typeof(hDataObj) != "undefined"){  
		default_search = hDataObj.default_search;
		var default_pnos = hDataObj.default_pnos;
	}
	
	$("#q_str").on("keyup",function(evt) {
		var e = (evt) ? evt : ((window.event) ? window.event : "")
		if(e.keyCode==13){
			window.location = "/search?q=" + $("#q_str").val();
		}
	}); 	
	
	$.get("/ajax/user/loginstatus", function(result){ 
		$(".toplinks ul li.top-login").remove();
		$(".toplinks ul li.top-reg").remove();
		$(".toplinks ul").first().prepend(result);
	})
	 
	$("#q_btn").on("click",function() {
		window.location = "/search?q=" + $("#q_str").val();
	}); 
	if(typeof(q_str_value) != "undefined"){
		if($.trim(q_str_value) != ""){
			$("#q_str").val(q_str_value);
		} 
	}else if(typeof(default_search) != "undefined"){
		$("#q_str").val(default_search);
	}	
	
//	$("#q_str").focus(function(){ 
//	  if(typeof(q_str_value) == "undefined"){ 
//	  	$(this).val("");
//	  }
//	}).blur(function(){ 
//	  if(typeof(q_str_value) == "undefined"){ 
//	  	if($(this).val() == ""){
//	  		$(this).val(default_search);
//	  	}
//	  }
//	});
	/**
	$("img").lazyload({
		//placeholder : "/assets/images/l_img.png", //加载图片前的占位图片
		effect      : "fadeIn", //加载图片使用的效果(淡入)
		skip_invisible : false,//默认隐藏的也加载
		threshold : 200
	});
	*/
	$("img.lazy").lazyload({ 
		effect : "fadeIn",
		threshold : 800 
	});

   /**     
    $("#q_str").autocomplete({
    	source: function( request, response ) { 
    		$.ajax({
	            url: "/suggest",
	            data: { 
	            	name: request.term 
	            }, 
	            dataType: "json", 
	            success: function( data ) { 
	            	response($.map(data, function(item) {
	            		return {
	            			label: item.name,
	            			value: item.name 
	            		};
                    }));
            	}
          }); 
        },
        minLength: 1,
        select: function (event, ui) {
			window.location = "/search?q=" + encodeURIComponent(ui.item.value);
        }
    });
    */ 
    if(typeof(no_search_results) != "undefined"){  
		var q = "";
		if(typeof(default_pnos) != "undefined"){
			q = default_pnos;
		}
		
		if(q){
			$.ajax({
				type:"get",
				url:"/list-products?q=" + q, 
				success:function(data){
					$("#no_results_div").html(data);
				}
			}); 
		}
	}
});
//注释1：首页topnav选项卡start
// $(function() {
// 	var s_path = window.location.pathname;
// 	var s_search = window.location.search;  
//     if((s_path != "/") && (s_path != "index.html")){ 
//     	var l_i = 0;
// 	    $('#topnav .topnav-main li').each(function(){ 
// 			var current = $(this).find("a");
// 			var p = this;
// 			var isAdd = false;
// 			var c_path = current.attr("href");  
// 			var s_str = s_path;
		 
// 			if(s_search){
// 				s_str += decodeURIComponent(s_search);
// 				//s_str += s_search;  
// 			}   
// 			if(s_search == "?f=index"){  
// 				$('.topnav-search-main ul > li').removeClass("current");
// 				$('.topnav-main ul > li').first().addClass("current"); 
				
// 			}else if(c_path == s_path){
// 				$('.topnav-main ul > li').removeClass("current");
// 				current.parent().addClass("current"); 
// 				var o = $(this).find('.sub-nav');
// 				var index =	$('#topnav .topnav-main li').index(this); 
// 				o.css({
// 					left: -index*100
// 				}).show();  
// 			}else if(c_path == s_str){
// 				$('.topnav-main ul > li').removeClass("current");
// 				current.parent().addClass("current"); 
// 				var o = $(this).find('.sub-nav');
// 				var index =	$('#topnav .topnav-main li').index(this); 
// 				o.css({
// 					left: -index*100
// 				}).show();  
// 			}else if(($("#bundled_pid") != null) && (typeof($("#bundled_pid").val()) != "undefined") && ($("#bundled_pid").val() != "")){
// 				//var index = $("#topnav .topnav-main li a[href^='/list-bundled-']").parent().index(); 
// 				var index = 6;
// 				var p = $('#topnav .topnav-main li').eq(index); 
// 				var o = p.find(".sub-nav").find("a[href^='/list-bundled-" + $("#bundled_pid").val() + "']");
// 				p.addClass("current");
// 				o.parent().css({
// 					left: -index*100
// 				}).show();
// 				o.addClass("current"); 
// 			}else if(($("#list_mid") != null) && ($("#list_mid").length > 0) && ($("#list_mid").val() != "")){  
// 				if(current.attr("href").indexOf($("#list_mid").val()) != -1){
// 					$('#topnav .topnav-main li').removeClass("current");
// 					var p = $('#topnav .topnav-main li').eq(l_i); 
// 					p.addClass("current"); 
// 					var o = $(this).find('.sub-nav'); 
// 					o.css({
// 						left: -l_i*100
// 					}).show();   
// 				}else{
// 					$(this).find(".sub-nav a").each(function(){  
// 						if(($(this).attr("href").indexOf($("#list_mid").val()) != -1) && ($(this).attr("href").indexOf("f=index")==-1)){
// 							$('#topnav .topnav-main li').removeClass("current");
// 							var p = $('#topnav .topnav-main li').eq(l_i); 
// 							p.addClass("current");
// 							$(this).parent().css({
// 								left: -l_i*100
// 							}).show();
// 							$(this).addClass("current");  
// 						} 
// 					}); 
// 				}
// 			}
// 			if(!$('#topnav .topnav-main li').hasClass("current")){
// 				$('#topnav .topnav-main li').eq(0).addClass("current");
// 			} 
// 			var div_c = $(this).find('.sub-nav > a');
// 			div_c.each(function(){  
// 				var isAdd = false;     
// 				if(encodeURIComponent($(this).attr("href")) == encodeURIComponent(s_str)){
// 					isAdd = true; 
// 				}else if($(this).attr("href") == s_path){
// 					isAdd = true; 
// 				}
// 				if(isAdd){  
// 					div_c.removeClass("current");
// 					$(this).addClass("current");
// 					$('.topnav-main ul > li').removeClass("current");
// 					$(this).parent().parent().addClass("current");
// 					var o = $(this).parent(); 
// 					var index =	$('#topnav .topnav-main li').index(p); 
// 					o.css({
// 						left: -index*100
// 					}).show(); 
// 				}
// 			}); 
// 			l_i++; 
// 	    });
// 	 }
// });
//注释1：首页topnav选项卡end

function bindPresentCardHead()
{
		
		var cardNo = document.getElementById("h_BcardNo").value;
		var cardPassword = document.getElementById("h_Bpassword").value;	
		if(cardNo==""||cardPassword==""){
			alert("卡号和密码不能为空。");
			return;
		}
		
		if(document.getElementById("displayarea") == null){
			//alert("请登录后再绑定礼品卡。");
			window.location.href="/login"; 
			return;
		}
		var data={"cardNo":cardNo,"cardPwd":cardPassword};
		var turl="/member/presentcard/bindpresentcard";
					
		$.ajax({
			cache:false,
			type: "get",
			data: data,
			url:turl,
			dataType: "json",
			error:function(err){
				alert("绑定失败，请刷新页面后重试！");
				},
			complete :function(){;},//AJAX请求完成时隐藏loading提示
			success: function(json){//msg为返回的数据，在这里做数据绑定
					if(json.error != "")
					{
						alert(json.error);
						return;
					}else{
						alert("绑定成功！");
						//调用刷新页面。
						//绑定成功后刷新礼品卡已绑定的列表
						window.location.href="/member/presentcard/mypresentCard"; 
					}
				}
		}); 
}
//placeholder.js
(function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i),o;if(i.value==s.attr("placeholder")&&s.hasClass("placeholder")){o=i==t.activeElement;if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder");o&&i.select()}}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),t.type=="password"?r[0].value=$(r[0]).attr("id"):r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery)
jQuery(function($){
	$('body').on('mouseenter', '.top-gift', function(){
		$('#top-gift').show();
	}).on('mouseleave', '.top-gift', function(){
		$('#top-gift').hide();
	});
	$('body').on('mouseenter', '.top-cart', function(){
		initCart();
		$('#showCartBox').show();
	}).on('mouseleave', '.top-cart', function(){
		$('#showCartBox').hide();
	});
	$('body').on('mouseenter', '.top-user', function(){
		$('#top-user').show();
	}).on('mouseleave', '.top-user', function(){
		$('#top-user').hide();
	});
	$(document).on('click','a.slider-next, a.slider-prev, .t_prev, .t_next',function(){
		 if($.trim($("#topnav .topnav-search .keyword").val()) == "" || $.trim($("#topnav .topnav-search .keyword").val()) == null || $.trim($("#topnav .topnav-search .keyword").val()) =="输入商品名称、品牌"){
             $("#topnav .topnav-search .keyword").val("输入商品名称、品牌");
             $("#topnav .topnav-search .keyword").css("color","#acacac")
         }

		 $("#topnav .topnav-search .keyword").focus(function(){
				if($.trim($("#topnav .topnav-search .keyword").val()) == "输入商品名称、品牌" ){
					$(this).val("");
				}
		})
	})
	
	/*$('#topnav .topnav-main li').on('mouseenter', function(){
		var o = $(this).find('.sub-nav');
		var index =	$('#topnav .topnav-main li').index(this);
		o.css({
			left: -index*100
		}).show();
		$(this).addClass('hover').siblings('li').removeClass('hover');
		$(this).siblings('li').find('.sub-nav').hide();
	}).on('mouseleave', function(){
		$(this).removeClass('hover');
		var items = $('#topnav .topnav-main li');
		var index =	items.index($('#topnav .topnav-main li.current'));
		items.find('.sub-nav').hide();
		items.eq(index).find('.sub-nav').show();
	});*/
	
	$('body').on('focus', '.topnav-search input.keyword', function(){
		$(this).closest('.topnav-search').addClass('topnav-search-focus');
	}).on('blur', '.topnav-search input.keyword', function(){
		$(this).closest('.topnav-search').removeClass('topnav-search-focus');
	});
	
	$('body').on('mouseover', '.topnav-search input.keyword', function(){
		$(this).closest('.topnav-search').addClass('topnav-search-focus');
	}).on('mouseout', '.topnav-search input.keyword', function(){
		$(this).closest('.topnav-search').removeClass('topnav-search-focus');
	});
	
	 $('input, textarea').placeholder();

	var hasPlaceholderSupport = function(){
		var attr = "placeholder";
		var input = document.createElement("input");
		return attr in input;
	}
	var support = hasPlaceholderSupport();
	if(!support){ 
		$("body").on("focus", "input", function(){
			var me = $(this);
			var placetext = me.attr("placeholder");
			if(me.val()==placetext){
				me.val("");	
			} else {
				me.select();	
			}
			me.addClass("focusclass").removeClass("blurclass");
		}).on("blur", "input", function(){
			var me = $(this);
			var placetext = me.attr("placeholder");
			if(me.val()==""){
				me.val(placetext).addClass("blurclass").removeClass("focusclass");	
			}
		});
	} 
});
//jQuery(function($){
	var PicTotal = $("#slidesImgs li").length;  
	var CurrentIndex; 
	var ToDisplayPicNumber = 0; 
	$("div.lunbo div.fnum a").click(DisplayPic);
	function DisplayPic() {
		CurrentIndex = $(this).index(); 
		$(this).parent().children().removeClass("on") 
		$(this).addClass("on"); 
		var Pic = $(this).parent().parent().children("ul");
		$(Pic).children().hide();  
		$(Pic).children("li").eq(CurrentIndex).show();
	}
	
	function PicNumClick() { 
		$("div.lunbo div.fnum a").eq(ToDisplayPicNumber).trigger("click");
		ToDisplayPicNumber = (ToDisplayPicNumber + 1) % PicTotal; 
		setTimeout("PicNumClick()",5000);
	}
	if ($("#focusbar") && ($("#focusbar").length > 0 )){   
	   	//setTimeout("PicNumClick()",5000);
	   	PicNumClick();
	}
	
	var t;
	var et;
	var pTotal = $("div.pwm div.preferredprolist").length;  
	var current_index = 0;
	function mouseDisplay(obj){
		clearTimeout(t);
		clearTimeout(et);
		obj.parent().parent().children().removeClass("current") 
		obj.parent().addClass("current"); 
		var cid = obj.attr("id");
		var product = $("#div_" + cid); 
		$(product).parent().find(".preferredprolist").hide();  
		$(product).show(); 
		current_index = cid.substring(5) - 1;
	}
	
	var ishold = false;
	var aishold = false;
	$("div.pwm div.preferredlist a").on('mouseover',function(){ 
		ishold = true;
		mouseDisplay($(this));
	});
	$("div.pwm div.preferredlist a").on('mouseleave',function(){ 
		ishold = false;  
		et = setTimeout("alazyShow()",1000);
	});
	
	$("div.pwm div.preferredprolist").mouseover(function(){ 
		aishold = true;
		clearTimeout(t);
	});
	$("div.pwm div.preferredprolist").on('mouseleave',function(){ 
		aishold = false;  
		et = setTimeout("lazyShow()",1000);
	});
	
	function lazyShow(){
		clearTimeout(t);
		clearTimeout(et); 
		if(!ishold){
			//ishold = true;
			//current_index = (current_index + 1) % pTotal; 
			slideDisplay(); 
		}  
		
	}
	
	function alazyShow(){ 
	 	clearTimeout(t);
		clearTimeout(et);  
		if(!aishold){
			//aishold = true;
			//current_index = (current_index + 1) % pTotal; 
			slideDisplay(); 
		}   
		//aishold = true;
	}
	
	function slideDisplay(){ 
		aishold = false; 
		ishold = false;
		$("div.pwm div.preferredprolist").hide();
		var obj = $("div.pwm div.preferredprolist").eq(current_index); 
		obj.show();
		var div_id = obj.attr("id");
		var c_id = div_id.substring(4);
		$("#"+c_id).parent().parent().children().removeClass("current") 
		$("#"+c_id).parent().addClass("current");
		
		current_index = (current_index + 1) % pTotal; 
		t = setTimeout("slideDisplay()",4000); 
		 
	}
	if(pTotal > 0){ 
		slideDisplay();  
	}
//});