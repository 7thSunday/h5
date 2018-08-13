var deviceWidth = 0;
var deviceHeight = 0;
var gameframe = null;
var gamePanel = null;
// 初始化游戏面板
function initPanel(frame,panel) {
    deviceWidth = window.innerWidth;
    deviceHeight = window.innerHeight;
    gameframe = document.querySelector(frame);
    gamePanel = document.getElementById(panel);
    gameframe.style.height = deviceHeight + "px";
    for(var j=0;j<10;j++) {
        var newLine = document.createElement("tr");
        newLine.style.height =deviceWidth/3 + "px";
        var rand = Math.floor(Math.random()*4);
        for(var i=0;i<4;i++) {
            var newBlock = document.createElement("td");
            if(i==rand&&j>1) {
                newBlock.classList.add("target");
            }
            newBlock.style.height =deviceWidth/3 + "px";
            newBlock.style.width =deviceWidth/4 + "px";
            newLine.appendChild(newBlock);
        }
        gamePanel.appendChild(newLine);
    }
}

// 开始游戏
function start() {
    var speed = 1;
    var step = deviceWidth/3;
    var distance = step;
    
    var levelup = setInterval(function() {
        speed = speed*0.8;
        console.log("speed up!",speed);
    },10000);
    gamePanel.style = "transition: all " + speed*0.8*1000 + "ms linear 0s";
    gamePanel.style.transform = "translateY(" + distance + "px)";

    gamePanel.addEventListener("transitionend",function() {
        var newLine = document.createElement("tr");
        this.style = "transition: all " + speed*0.8*1000 + "ms linear 0s";
        newLine.style.height = deviceWidth/3 + "px";
        var rand = Math.floor(Math.random()*4);
        for(var i=0;i<4;i++) {
            var newBlock = document.createElement("td");
            if(i==rand) {
                newBlock.classList.add("target");
            }
            newBlock.style.height = deviceWidth/3 + "px";
            newBlock.style.width = deviceWidth/4 + "px";
            newLine.appendChild(newBlock);
        }
        panel.appendChild(newLine);
        distance += step;
        gamePanel.style.transform = "translateY(" + distance + "px)";
    });

    // 黑块点击事件
    gamePanel.addEventListener("click",function(e){
        // console.log(e.target.parentNode);
        // if(e.target.parentNode)
    });
}

