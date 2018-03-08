// 定义模块，加载头部、尾部资源
define(["jquery", "cookie"], function($){
	// 将 header.html 加载显示，绑定交互效果
	$.cookie.json=true;
	$.ajax("/html/include/header.html").done(function(data){
		$(".header").html(data);
	}).done(function(){
		// 绑定查找的键盘按键事件
		$(".txt").keyup(function(){
			var url = "https://suggest.taobao.com/sug?code=utf-8&q="+ $(this).val() +"&callback=?";
			$.getJSON(url, function(data){
				var html = "";
				data.result.forEach(function(curr){
					html += "<div>"+ curr[0] +"</div>"
				});

				$(".info").html(html);
			});
			
		});
		$(".rte").mouseenter(function(){
				$(".bb").show();
				$(".bb").mouseleave(function(){
					$(".bb").hide();
				})
		});
		var qin=$.cookie("products");
		var b=qin.length;
		console.log(qin,b);
		$(".cart>a>span").html(b);
		//     sum=0;
		// $.each(qin,function(elements){
		// 	sum+=`${elements.amount}`
		// 	console.log(sum);
		// })
	}).done(function(){
		// 如果有用户登录成功，则显示欢迎信息
		var user = $.cookie("loginUser");
		if (user)
			$(".login_reg").html("欢迎你：<a href='personal.html'>"+ user +"</a>")
	});

	// 将 footer.html 加载显示到 div.footer 中
	$(".footer").load("/html/include/footer.html");
});