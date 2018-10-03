class Scene {
    constructor(canvas) {
        this.canvas = document.getElementById(canvas);
        this.devWidth = window.innerWidth;
        this.devHeight = window.innerHeight;
        this.ctx = null;
        this.src = ["../img/sample01.png","../img/sample02.png"];
    }
    // initialize
    init() {
        // check canvas supported on this broswer
        if(this.canvas.getContext) {
            this.ctx = this.canvas.getContext('2d');
        }else {
            return
        }
        // init canvas
        this.canvas.width = this.devWidth;
        this.canvas.height = this.devHeight;
        this.canvas.style = `position: absolute;top: 0;left: 0;`
        // run after loaded
        let loading = new createjs.LoadQueue();
        loading.loadManifest(this.src);
        loading.on("complete",() => {
            this.run();
        });
        loading.on("error", () => {
            window.alert("load failed.");
        });
    }
    // run scene
    run() {
        let type1 = new Image(),
            type2 = new Image();
        type1.src = this.src[0];
        type2.src = this.src[1];
        // this.ctx.clearRect(0,0,this.devWidth,this.devHeight);
        type1.onload = () => {
            this.ctx.drawImage(type1,0,0);
        }
    }
}