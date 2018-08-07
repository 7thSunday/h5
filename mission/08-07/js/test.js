(function(){
    function Phone(screenSize,color,storage,version){
        this.screenSize = screenSize;
        this.color = color;
        this.storage = storage;
        this.version = version;
        this.getPrice = function(screenSize,storage) {
            var price = 5288;
            if(screenSize == "5.5") {
                price += 800;
            }
            if(storage == 64) {
                price += 800;
            }
            if(storage == 128) {
                price += 1600;
            }
            return price;
        }
    }
    // function init() {

    // }
    var allSelection = document.getElementsByClassName("selection-item");
    for(let i=0;i<allSelection.length;i++) {
        allSelection[i].onclick = function(){
            let currentSpec = allSelection[i].parentNode.children;
            for(let i=0;i<currentSpec.length;i++) {
                currentSpec[i].classList.remove("active");
            }
            allSelection[i].classList.add("active");
        }
    }
}())