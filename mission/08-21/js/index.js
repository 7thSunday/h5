(function(){
    $(".loading").css({
        "width":$(window).innerWidth(),
        "height":$(window).innerHeight()
    });
    var myUrl = "js/img.json";
        $.ajax({
            url:myUrl,
            data:"",
            dataType:"json",
            success:function(res){
                var loading = new createjs.LoadQueue();
                loading.loadManifest(res);
                loading.on("progress",function(event) {
                    // console.log(event.progress);
                    var current = Math.floor(event.progress*100);
                    $(".load-status").text(current+"%");
                    $(".load-block").css("width",current+"%");
                });
                loading.on("complete",function() {
                    console.log("load completed!");
                    $(".start").fadeIn();
                    $(".frame .box").append(`<img src="img/cover.png" alt="cover" class="cover">`);
                    $(".frame .box").eq(1).prepend(`<img class="target" src="img/target.png" alt="target">`);
                    //click event of start button
                    $(".start").on("click",function(){
                        $(".loading").css("display","none");
                        var game = new Game(".frame");
                        game.init();
                        game.start();
                    });
                });
                loading.on("error",function() {
                    console.log("load error!");
                });
            }
        });
}())

