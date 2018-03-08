require(["config"], function(){
	require(["jquery","template","cookie","zoom","fly","load"], function($,template,cookie,elevateZoom,fly){
		$.cookie.json = true;
		var fuck = $.cookie("id");
		$.getJSON("/mock/list.json",function (data) {
			let contrData = data.res_body.lcy;
			let arr = [],i = 0;
			$.each(contrData, function(index,elements) {
				arr.push(`${elements.id}`);
			});
			i = $.inArray(fuck,arr);
			let  prodData = {ll : data.res_body.lcy};
			var array = []; 
			array.push(prodData.ll[i]);
			var html  = "";
			$.each(array,function (index,element) {
				html = `<div class="box">
					<div class="id" style="display:none">${element.id}</div>
					<img src ="${element.img}" class="img" style="display:none;">
					<div class="poi">
						<img src="${element.img2}" class="img2"  data-zoom-image="${element.img2}">
						
					</div>
					
					<div class="hui">
						<div class="title">${element.title}</div>
						<div class="price">￥${element.price}</div>
						<p>企业员工用户登录后可享受优惠价格</p>
						<div class="sl"><div class="kuy">数量：</div><div class="reduce">-</div><div class="pu">1</div><div class="add">+</div></div>
						<div class="add">加入购物车</div>
					</div>
				</div>`
				$(".xgp").html(html);
				$(".img2").elevateZoom({});
			});			
		});
	})
});