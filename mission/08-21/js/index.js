
var game = new Game(".frame");
game.init();
$(".top-cover").css({
    "width":"1000px",
    "height":"1000px",
    "position":"absolute",
    "z-index":"10",
    "background":"rgba(0,0,0,0.5)"
});
var i=0;
var timer = setInterval(function(){
    i++;
    game.exchange(1000);
    if(i==10) {
        clearInterval(timer);
        $(".top-cover").css("display","none");
    }
},1000)