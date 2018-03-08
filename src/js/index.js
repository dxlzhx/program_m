require(["config"], function(){
	require(["jquery","carousel","template","load"], function($,carousel,template){
		$.getJSON("/mock/list.json",function(data){
			var renderData = {products : data.res_body.data};
			var html = template("list_template", renderData);
			var wq={tt:data.res_body.wzb};
			var ss = template("gll", wq);
			$(".ff").html(html);
			$(".ypb2").html(ss);
			$(".ff>.box:nth-child(1) ").click(function(){
				location="/html/detail.html";
			});
		});
			$(".lb").eq(0).carousel({
			imgs : [
				{src:"/images/1493102368.jpg", href:"#"},
				{src:"/images/1498643976.jpg", href:"#"},
				{src:"/images/1509438762.jpg",href:"#"}
			],
			width:1202,
			height: 430,
			type: "slide",
			duration: 2000,

		});

		
	});
});