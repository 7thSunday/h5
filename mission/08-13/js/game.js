function Game(frame,panel,start) {
    var that = this;
    this.deviceWidth = window.innerWidth;
    this.deviceHeight = window.innerHeight;
    this.gameframe = document.querySelector(frame);
    this.gamePanel = document.getElementById(panel);
    this.btnStart = document.querySelector(start);
    this.levelup;
    this.index = 0;
    this.running = true;
    this.score;
    var showScore = document.createElement("div");
    // 初始化游戏面板
    this.initPanel = function() {
        console.log("initializing...");
        this.gamePanel.innerHTML = "";
        this.score = 0;
        this.gameframe.style.height = this.deviceHeight + "px";
        this.gamePanel.style.transform = "translateY(0px)";
        this.btnStart.style.display = "block";
        for(var j=0;j<10;j++) {
            var newLine = document.createElement("tr");
            newLine.style.height = this.deviceWidth/3 + "px";
            var rand = Math.floor(Math.random()*4);
            for(var i=0;i<4;i++) {
                var newBlock = document.createElement("td");
                if(i==rand&&j>1) {
                    newBlock.classList.add("target");
                }
                newBlock.style.height = this.deviceWidth/3 + "px";
                newBlock.style.width = this.deviceWidth/4 + "px";
                newLine.appendChild(newBlock);
            }
            this.gamePanel.appendChild(newLine);
        }
    }
    // 开始按钮的点击事件
    this.btnStart.addEventListener("click",function() {
        that.start();
        this.style.display = "none";
        that.gameframe.appendChild(showScore);
        showScore.classList.add("score");
        showScore.innerHTML = "SCROE: " + that.score;
    })
    // 开始游戏
    this.start = function() {
        var speed = 1;
        var step = this.deviceWidth/3;
        var distance = step;
        this.levelup = setInterval(function() {
            speed = speed*0.8;
            console.log("speed up!",speed);
        },10000);
        this.gamePanel.style = "transition: all " + speed*0.8*1000 + "ms linear 0s";
        this.gamePanel.style.transform = "translateY(" + distance + "px)";

        this.gamePanel.addEventListener("transitionend",function() {
            if(that.running) {
                var newLine = document.createElement("tr");
                this.style = "transition: all " + speed*0.8*1000 + "ms linear 0s";
                newLine.style.height = that.deviceWidth/3 + "px";
                var rand = Math.floor(Math.random()*4);
                for(var i=0;i<4;i++) {
                    var newBlock = document.createElement("td");
                    if(i==rand) {
                        newBlock.classList.add("target");
                    }
                    newBlock.style.height = that.deviceWidth/3 + "px";
                    newBlock.style.width = that.deviceWidth/4 + "px";
                    newLine.appendChild(newBlock);
                }
                this.appendChild(newLine);
                distance += step;
                this.style.transform = "translateY(" + distance + "px)";
                for(var i=0;i<4;i++) {
                    if(this.children[that.index].children[i].classList.contains("target")) {
                        that.gameOver();
                    }
                }
                that.index ++;
            }
        });

        // 方块的点击事件
        that.gamePanel.addEventListener("click",function(e){
            var preLine = e.target.parentNode.previousSibling.children;
            var allow = true;
            for(var i=0;i<4;i++) {
                if(preLine[i].classList.contains("target")) {
                    allow = false;
                }
            }
            if(allow) {
                if(e.target.classList.contains("target")) {
                    e.target.classList.remove("target");
                    that.score ++;
                    showScore.innerHTML = "SCROE: " + that.score;
                } else {
                    that.gameOver();
                }
            }
        });
    }

    // 结束游戏
    this.gameOver = function() {
        this.gamePanel.style.transition = "";
        alert("Game Over!\nYour Score: " + this.score);
        clearInterval(this.levelup);
        location.reload();
    }
}