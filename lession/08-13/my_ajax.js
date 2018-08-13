function my_ajax(url,type,callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(type,url);
    xhr.send();
    xhr.addEventListener("readystatechange",function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                var res = JSON.parse(this.responseText);
                callback(res);
            }else {
                console.log("request failed.");
            }
        }
    });
}