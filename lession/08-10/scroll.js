function ScrollImg(el) {
    var that = this;//保存this指向
    this.El = document.querySelector(el);
    this.imgBox = this.El.querySelector(".imgBox");
    this.ali = this.imgBox.querySelectorAll("li");
    this.next = this.El.querySelector(".next");
    this.pre = this.El.querySelector(".pre");

    this.index = 1;
    this.isRoll = false;
    this.imgWidth = this.ali[0].offsetWidth;
    this.size = this.ali.length;

    ScrollImg.prototype.init = function() {
        this.clone_first = this.ali[0].cloneNode(true);
        this.clone_last = this.ali[this.size-1].cloneNode(true);
        this.imgBox.appendChild(this.clone_first);
        this.imgBox.insertBefore(this.clone_last,this.ali[0]);

        this.imgBox.style.transform = `translateX(${(-this.index)*this.imgWidth}px)`;

        this.move = function() {
            this.imgBox.classList.add("tran");
            this.imgBox.style.transform = `translateX(${(-this.index)*this.imgWidth}px)`;
            this.isRoll = true;
        }
        this.next.onclick = function() {//在这里this指向按钮，而不是轮播图对象
            if(!that.isRoll) {
                that.index ++;
                that.move();
                that.isRoll = true;
            }
        }
        this.pre.onclick = function() {//在这里this指向按钮，而不是轮播图对象
            if(!that.isRoll) {
                that.index --;
                that.move();
                that.isRoll = true;
            }
        }
        // 边界判断
        this.imgBox.addEventListener("transitionend",function() {
            if(that.index == that.size+1) {
                that.index = 1;
            }
            if(that.index == 0) {
                that.index = that.size;
            }
            that.imgBox.classList.remove("tran");
            that.imgBox.style.transform = `translateX(${(-that.index)*that.imgWidth}px)`;
            that.isRoll = false;
        });
    }
}