class Game {
    constructor(frame) {
        this.frame = $(frame);//base frame of game
        this.box = $(this.frame).find(".box");//box in frame
        this.boxCtrlr = [];//box controlor
        this.devWidth = $(window).innerWidth();//width of monitor
        this.devHeight = $(window).innerHeight();//height of monitor
    }
    //initialzing function
    init() {
        //set width of frame
        this.frame.css({
            "height":this.devHeight
        });
        //create box for controlor
        for(let i=0;i<3;i++) {
            let box = new Box(this.box.eq(i),i,this.devWidth/4,this.devWidth/4,this.devWidth);
            this.boxCtrlr.push(box);
        }
    }
    //exchange position of 2 box
    exchange(time) {
        //get 2 random position
        let a = Math.floor(Math.random()*3),
            b = Math.floor(Math.random()*3);
        while(a==b) {
            b = Math.floor(Math.random()*3);
        }
        //exchange position a with position b
        for(let i=0;i<3;i++) {
            if(Math.abs(a-b)==2) {
                for(let j=0;j<3;j++) {
                    if(this.boxCtrlr[i].position==1) {
                        $(this.boxCtrlr[i].el).css("z-index","2");
                    }
                }
            }
            if(this.boxCtrlr[i].position == a) {
                this.boxCtrlr[i].setPosition(b,time);
            }else if(this.boxCtrlr[i].position == b) {
                this.boxCtrlr[i].setPosition(a,time);
            }
        }
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
        this.setPositionForInit();
        //click event
        this.el.on("click",function(){
            $(this).siblings(".top-cover").css("display","block");
            $(this).find(".cover").animate({
                "top":"-100%"
            });
        });
    }
    //set position for box in gaming
    setPosition(newPosition,time) {
        let prePosition = this.position;
        this.position = newPosition;
        // 0 => 1
        if(prePosition==0&&newPosition==1) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxLeft)/2,
                "top":"46%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxMiddle,
                "top":"50%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 1 => 0
        if(prePosition==1&&newPosition==0) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxLeft)/2,
                "top":"54%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxLeft,
                "top":"50%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 0 => 2
        if(prePosition==0&&newPosition==2) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxLeft+this.boxRight)/2,
                "top":"46%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxRight,
                "top":"50%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 2 => 0
        if(prePosition==2&&newPosition==0) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxLeft+this.boxRight)/2,
                "top":"54%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxLeft,
                "top":"50%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 1 => 2
        if(prePosition==1&&newPosition==2) {
            $(this.el).css("z-index","1");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxRight)/2,
                "top":"46%",
                "width":this.width*0.8,
                "height":this.height*0.8
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxRight,
                "top":"50%",
                "width":this.width,
                "height":this.height
            },time/2,"linear");
        }
        // 2 => 1
        if(prePosition==2&&newPosition==1) {
            $(this.el).css("z-index","3");
            $(this.el).animate({
                "left":(this.boxMiddle+this.boxRight)/2,
                "top":"54%",
                "width":this.width*1.1,
                "height":this.height*1.1
            },time/2,"linear");
            $(this.el).animate({
                "left":this.boxMiddle,
                "top":"50%",
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
    setPositionForInit(){
        switch(this.position) {
            case 0 :
                $(this.el).css({
                    "left":this.boxLeft,
                    "top":"50%"
                });
                break;
            case 1 :
                $(this.el).css({
                    "left":this.boxMiddle,
                    "top":"50%"
                });
                break;
            case 2 :
                $(this.el).css({
                    "left":this.boxRight,
                    "top":"50%"
                });
                break;    
        }
    }
}