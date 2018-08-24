class Game {
    constructor(frame) {
        this.frame = $(frame);//base frame of game
        this.box = $(this.frame).find(".box");//box in frame
        this.boxCtrlr = [];//box controlor
        this.devWidth = $(window).innerWidth();//width of monitor
        this.devHeight = $(window).innerHeight();//height of monitor
        this.exTime;//box exchange time
        this.chance;//chance left
        this.score;//player's score
        this.stageCount;//stage counter
    }
    //initialzing function
    init() {
        var that = this;
        this.exTime = 1000;//init time
        this.score = 0;//init score
        this.chance = 3;//init chance
        this.stageCount = 1;//init stage counter
        //init viewport
        this.frame.find(".score").text("SCORE : 0");
        this.frame.find(".chance").text("❤❤❤");
        this.frame.find(".reset").css("display","none");
        //set width of frame
        this.frame.css({
            "height":this.devHeight
        });
        //create box for controlor
        for(let i=0;i<3;i++) {
            let box = new Box(this.box.eq(i),i,this.devWidth/4,this.devWidth/4,this.devWidth);
            this.boxCtrlr.push(box);
        }
        //box click event
        this.frame.on("click",".box",function(e){
            that.frame.find(".guess").fadeOut();
            that.frame.find(".top-cover").css("display","block");
            $(this).find(".cover").animate({
                "top":"-100%"
            });
            var showTarget = setTimeout(function(){
                that.frame.find(".target").parent().find(".cover").animate({
                    "top":"-100%"
                });
                that.frame.find(".next").fadeIn();
                clearTimeout(showTarget);
            },300);
            if($(e.target).parent().find(".target").length==0) {
                //correct
                that.chance --;
                var txt = that.frame.find(".chance").text();
                txt = txt.slice(1);
                that.frame.find(".chance").text(txt);
                if(that.chance==0) {
                    setTimeout(function(){
                        that.gameOver();
                    },1100);
                }
                that.frame.find(".wrong").fadeIn();
            }else {
                //wrong
                that.score += that.stageCount;
                that.frame.find(".score").text("SCORE : " + that.score);
                that.frame.find(".correct").fadeIn();
            }
        });
        //next stage click event
        this.frame.on("click",".next",function(){
            that.frame.find(".correct").fadeOut();
            that.frame.find(".wrong").fadeOut();
            that.setNextStage();
        });
        //play again click event
        this.frame.find(".reset").on("click",function(){
            that.resetGame();
        });
    }
    //start the game
    start() {
        this.boxCtrlr[1].el.find(".cover").css({
            "top":"-100%"
        });
        this.runCurrentStage();
    }
    //prepare for next stage
    setNextStage() {
        this.stageCount ++;
        if(this.stageCount<8) {
            this.exTime = Math.floor(this.exTime*0.8);
        }else if(this.stageCount<15){
            this.exTime = this.exTime - 15;
        }
        this.runCurrentStage();
        // console.log("stage",this.stageCount);
        // console.log("extime",this.exTime);
    }
    //run current stage
    runCurrentStage() {
        var that = this;
        //hint timer
        var i=0;
        var hintTimer = setInterval(function(){
            that.frame.find(".next").fadeToggle();
            i++;
            if(i==5) {
                clearInterval(hintTimer);
                that.frame.find(".next").css("display","none");
            }
        },600);
        //cover the target
        setTimeout(function(){
            that.frame.find(".cover").animate({
                "top":"0%"
            });
        },3000);
        //exchange position
        var go = setTimeout(function(){
            var i=0;
            var exTimer = setInterval(function(){
                i++;
                // console.log("ex");
                that.exchange();
                if(i==10) {
                    clearInterval(exTimer);
                    clearTimeout(go);
                    that.frame.find(".top-cover").css("display","none");
                    that.frame.find(".guess").fadeIn();
                }
            },that.exTime+100);
        },4000);
        
    }
    //exchange position of 2 box
    exchange() {
        //get 2 random position
        let a = Math.floor(Math.random()*3),
            b = Math.floor(Math.random()*3);
        while(a==b) {
            b = Math.floor(Math.random()*3);
        }
        //exchange position a with position b
        if(Math.abs(a-b)==2) {
            for(let j=0;j<3;j++) {
                if(this.boxCtrlr[j].position==1) {
                    $(this.boxCtrlr[j].el).css("z-index","2");
                }
            }
        }
        for(let i=0;i<3;i++) {
            if(this.boxCtrlr[i].position == a) {
                this.boxCtrlr[i].setPosition(b,this.exTime);
            }else if(this.boxCtrlr[i].position == b) {
                this.boxCtrlr[i].setPosition(a,this.exTime);
            }
        }
    }
    //game over
    gameOver() {
        this.frame.find(".next").css("display","none");
        window.alert("Game Over!\nYour Score : " + this.score);
        this.frame.find(".reset").css("display","block");
        this.frame.find(".correct").css("display","none");
        this.frame.find(".wrong").css("display","none");
    }
    //reset game
    resetGame() {
        this.exTime = 1000;//reset time
        this.score = 0;//reset score
        this.chance = 3;//reset chance
        this.stageCount = 1;//reset stage counter
        //reset viewport
        this.frame.find(".score").text("SCORE : 0");
        this.frame.find(".chance").text("❤❤❤");
        this.frame.find(".reset").css("display","none");
        this.frame.find(".cover").css("top","0%");
        //reset position of box
        for(let i=0;i<3;i++) {
            this.boxCtrlr[i].setPositionForInit(i);
            this.boxCtrlr[i].position = i;
        }
        //reset completed and restart the game
        this.start();
    }
}

class Box {
    constructor(el,position,width,height,devWidth) {
        this.el = el;
        this.position = position;
        this.width = width;
        this.height = height;
        this.boxLeft = devWidth/24;
        this.boxMiddle = devWidth*3/8;
        this.boxRight = devWidth*2/3+this.boxLeft;
        this.setShape();
        this.setPositionForInit(this.position);
    }
    //set position for box in gaming
    setPosition(newPosition,time) {
        let prePosition = this.position;
        this.position = newPosition;
        // console.log(prePosition,newPosition);
        // 0 => 1
        if(prePosition==0&&newPosition==1) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxLeft)/2,
                "top":"53%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxMiddle,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 1 => 0
        if(prePosition==1&&newPosition==0) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxLeft)/2,
                "top":"58%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxLeft,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 0 => 2
        if(prePosition==0&&newPosition==2) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxLeft+this.boxRight)/2,
                "top":"53%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxRight,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 2 => 0
        if(prePosition==2&&newPosition==0) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxLeft+this.boxRight)/2,
                "top":"58%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxLeft,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 1 => 2
        if(prePosition==1&&newPosition==2) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxRight)/2,
                "top":"53%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxRight,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 2 => 1
        if(prePosition==2&&newPosition==1) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxRight)/2,
                "top":"58%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxMiddle,
                "top":"55%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
    }
    //set width and height for box
    setShape() {
        $(this.el).css({
            "width":this.width,
            "height":this.height,
            "z-index":"1"
        });
    }
    //set position for box before game start
    setPositionForInit(position){
        switch(position) {
            case 0 :
                $(this.el).css({
                    "left":this.boxLeft,
                    "top":"55%"
                });
                break;
            case 1 :
                $(this.el).css({
                    "left":this.boxMiddle,
                    "top":"55%"
                });
                break;
            case 2 :
                $(this.el).css({
                    "left":this.boxRight,
                    "top":"55%"
                });
                break;    
        }
    }
}