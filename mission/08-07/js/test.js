(function(){
    var screenSize,//屏幕尺寸
        color,//颜色
        storage,//内存
        version;//版本
    var price = document.querySelector(".price");//价格
    var phone;//phone对象的实例
    // Phone构造函数
    function Phone(screenSize,color,storage,version){
        this.screenSize = screenSize;
        this.color = color;
        this.storage = storage;
        this.version = version;
        this.getPrice = function() {
            if(this.screenSize==""||this.color==""||this.storage==""||this.version=="") {
                return `￥5288 - ￥7688`;
            }
            var price = 5288;
            if(this.screenSize == "5.5") {
                price += 800;
            }
            if(this.storage == 64) {
                price += 800;
            }
            if(this.storage == 128) {
                price += 1600;
            }
            return `￥${price}`;
        }
    }
    // 初始化
    function init() {
        var screenList = document.querySelector(".screen-size").children;
        var colorList = document.querySelector(".color").children;
        var storageList = document.querySelector(".storage").children;
        var versionList = document.querySelector(".version").children;
        // 获取屏幕尺寸
        switch(getActive(screenList)) {
            case 1 :
                screenSize = "5.5";
                break;
            case 0 :
                screenSize = "4.7";
                break;
            default :
                screenSize = "";
                break;
        }
        // 获取颜色
        switch(getActive(colorList)) {
            case 2 :
                color = "gray";
                break;
            case 1 :
                color = "golden";
                break;
            case 0 :
                color = "sliver";
                break;
            default : 
                color = "";
                break;
        }
        // 获取内存
        switch(getActive(storageList)) {
            case 2 :
                storage = 128;
                break;
            case 1 :
                storage = 64;
                break;
            case 0 :
                storage = 16;
                break;
            default :
                storage = "";
                break;
        }
        // 获取版本
        switch(getActive(versionList)) {
            case 2 :
                version = "ChinaUnicom";
                break;
            case 1 :
                version = "ChinaMobile";
                break;
            case 0 :
                version = "open";
                break;
            default :
                version = "";
                break;
        }
        phone = new Phone(screenSize,color,storage,version);
        console.log(phone);
        price.innerHTML = phone.getPrice();
        console.log("initializing...");
    }
    init();
    // 选项的点击事件
    var allSelection = document.getElementsByClassName("selection-item");
    for(let i=0;i<allSelection.length;i++) {
        allSelection[i].onclick = function(){
            let currentSpec = allSelection[i].parentNode.children;
            if(this.classList.contains("active")) {
                this.classList.remove("active");
            }else {
                for(let i=0;i<currentSpec.length;i++) {
                    currentSpec[i].classList.remove("active");
                }
                allSelection[i].classList.add("active");
            }
            init();
        }
    }
    // 获取被激活的选项
    function getActive(arr) {
        for(var i=0;i<arr.length;i++) {
            if(arr[i].classList.contains("active")) {
                break;
            }
        }
        return i;
    }
}())