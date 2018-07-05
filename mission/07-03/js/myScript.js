function go() {
//	下拉列表
	var trigger = $(".folder p");
	trigger.click(function() {
		var box = $(this).next("ul");
		box.slideToggle(function(){
			if (box.css("display")==="block") {
				$(this).siblings(".pin").css(
					"transform", "rotate(90deg)"
				);
			}else {
				$(this).siblings(".pin").css(
					"transform", "rotate(0deg)"
				);
			}
		});
	});
//	转到登录填写页面
	var goToLogin = $(".login-now");
	goToLogin.click(function(){
		$(".offline").css(
			"display", "none"
		);
		$(".login-page").fadeIn();
	});
//	转到已登录
	var goToLogined = $(".btn-login");
	goToLogined.click(function(){
		$(".login-page").css(
			"display", "none"
		);
		$(".logined").fadeIn();
	});
//	退出登录
	var logout = $(".logout");
	logout.click(function(){
		$(".logined").css(
			"display", "none"
		);
		$(".offline").fadeIn();
	});
//	搜索弹窗显示隐藏
	var goToSearch = $("header .search");
	goToSearch.click(function(){
		$(".search-box").css(
			"transform", "translateY(0)"
		);
	});
	var hideSearch = $(".search-box .back");
	hideSearch.click(function(){
		$(".search-box").css(
			"transform", "translateY(-100%)"
		);
	});
//	显示搜索结果
	var showResult = $(".tag");
	showResult.click(function(){
		$(".search-box .content").css(
			"display", "none"
		);
		$(".result").css(
			"display", "block"
		);
	});
}
go();