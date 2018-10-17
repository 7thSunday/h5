class Maple {
    constructor(canvas,texture,ratio) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.texture = texture;
        this.ratio = ratio;
        this.w = texture.width / 8;
        this.h = texture.height / 8;
        this.time;
        this.init();
    }
    // initialize
    init() {
        // position
        this.x = Math.floor(Math.random()*this.canvas.width);
        this.y = Math.floor(Math.random()*this.canvas.height -200);
        // scale size
        this.size = Math.random()*0.4 + 0.8;
        // rotate
        this.rotateDer = Math.random()>0.5 ? true : false;
        this.rotateDeg = 0;
        this.rotateSpeed = Math.random() / 50 * this.ratio;
        // drop
        this.dropDir = Math.random()>0.5 ? true : false;
        this.dropSpeed = (Math.random()*0.2+2)*this.ratio;
        this.xSpeed = Math.random() / 1.6 * this.ratio;
        // existence time
        this.extTime = Math.floor(Math.random()*3+3)*1000;
        this.crtTime = new Date().getTime();
        // alpha
        this.alpha = 0;
        this.maxAlpha = 0.8;
        // initialize completed and start dropping
        this.drop();
    }
    // function drop
    drop() {
        // rotate
        this.rotateDer ? this.rotateDeg += this.rotateSpeed : this.rotateDeg -= this.rotateSpeed;
        // x offset
        this.dropDir ? this.x += this.xSpeed : this.x -= this.xSpeed;
        // y offset
        this.y += this.dropSpeed;
    }
    // draw on canvas
    draw() {
        this.time = new Date().getTime();
        // drop or init
        if(this.time-this.crtTime < this.extTime) {
            this.drop();
        }else {
            this.init();
        }
        // alpha animation
        if(this.time-this.crtTime<1000&&this.alpha<this.maxAlpha) {
            this.alpha += 0.02;
        }else if((this.time+1000)>(this.crtTime+this.extTime)&&this.alpha>0) {
            this.alpha -= 0.02;
        }
        // draw image while alpha over 0
        if(this.alpha>0) {
            this.ctx.globalAlpha = this.alpha;
            this.ctx.translate(this.x,this.y);
            this.ctx.rotate(Math.PI * this.rotateDeg);
            this.ctx.scale(this.size,this.size);
            this.ctx.drawImage(this.texture,-this.w/2,-this.h/2,this.w,this.h);
        }
    }
}