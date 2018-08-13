function run() {
    initPanel(".frame","panel");
    var btnStart = document.querySelector(".btn-start");
    btnStart.addEventListener("click",function() {
        console.log("start!");
        this.style.display = "none";
        start();
    });
}
run();