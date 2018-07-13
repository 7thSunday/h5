$(function(){
	$(".container").fullpage({
//		设置内容顶部对齐
		verticalCentered:false,
		
		afterLoad:function(anchor,index) {
			if(index === 2) {
				$(".question").find(".mark-1").addClass("show-mark-1");
				$(".question").find(".mark-2").addClass("show-mark-2");
				$(".question").find(".mark-5").addClass("show-mark-5");
				$(".question").find(".mark-4").addClass("show-mark-4");
				$(".question").find(".mark-3").addClass("show-mark-3");
			}
		},
		
		afterSlideLoad:function(anchorLink,index,slideIndex,direction) {
			$(".question").find(".active").find(".selection").animate({
				"top": "0%"
			},500,"easeOutExpo");
			$(".question").find(".active").find("h2").animate({
				"top": "0%"
			},300,"easeOutExpo");
			$(".question").find(".active").find(".img").addClass("fadeIn");
			$(".question").find(".active").find(".result-block").addClass("flip");
		},
		
		onSlideLeave:function(anchorLink,index,slideIndex,direction) {
			$(".question").find(".active").find(".selection").animate({
				"top": "300%"
			},500,"easeOutExpo");
			$(".question").find(".active").find("h2").animate({
				"top": "-300%"
			},300,"easeOutExpo");
			$(".question").find(".active").find(".img").removeClass("fadeIn");
		}
	});
	
//	开始测试
	$(".start").click(function(){
		$.fn.fullpage.moveTo(2,0);
	})
	
//	选择选项
	$(".selection").click(function(){
		$(this).find(".correct").css("display","block");
		$(this).siblings(".selection").find(".correct").css("display","none");
	})
	
	var cover = $(".cover");
	cover.click(function(){
		if($(this).css("display") !== "none") {
			$(this).fadeOut();
		}
	})
})
