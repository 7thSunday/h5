(function(){
	// ************1*************
	var btnSlideDown = document.querySelector(".slide-down");
	var btnSlideUp = document.querySelector(".slide-up");
	var btnSlideToggle = document.querySelector(".slide-toggle");
	var img = document.querySelector("section .img-block .img");
	var block = document.querySelector("section .img-block");
	btnSlideDown.addEventListener("click",function(){
		img.classList.add("show-img");
		block.classList.add("hide-line");
	});
	btnSlideUp.addEventListener("click",function(){
		img.classList.remove("show-img");
		block.classList.remove("hide-line");
	});
	btnSlideToggle.addEventListener("click",function(){
		img.classList.toggle("show-img");
		block.classList.toggle("hide-line");
	});

	// *************2*************
	var backToTop = document.querySelector(".back-to-top");
	backToTop.addEventListener("click",function(){
		var timer = setInterval(function(){
			window.scrollBy(0,-10);
			if(window.pageYOffset == 0) {
				clearInterval(timer);
			}
		},2);
	});

	// *************3**************
	document.querySelector(".card-title li").classList.add("selected");
	document.querySelector(".card-content li").classList.add("show-content");
	var cardTitle = document.querySelectorAll(".card-title li");
	var cardContent = document.querySelectorAll(".card-content li");
	for(let i=0;i<cardTitle.length;i++) {
		cardTitle[i].addEventListener("click",function(){
			for(let j=0;j<cardTitle.length;j++) {
				cardTitle[j].classList.remove("selected");
				cardContent[j].classList.remove("show-content");
			}
			this.classList.add("selected");
			cardContent[i].classList.add("show-content");
		});
	}
}())
