function Accordion(el) {
    var that = this;
    this.El = document.querySelector(el);
    this.itemList = this.El.querySelectorAll(".acc-item");
    this.size = this.itemList.length;
    Accordion.prototype.init = function() {
        this.itemList[0].classList.add("active");
        for(let i=0;i<this.size;i++) {
            this.itemList[i].onclick = function() {
                for(let j=0;j<that.size;j++) {
                    that.itemList[j].classList.remove("active");
                }
                this.classList.add("active");
            }
        }
    }
}