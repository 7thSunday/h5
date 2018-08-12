(function(){
    const urlP = "data/province.json";
    const urlC = "data/city.json";
    const urlA = "data/area.json";
    var province = document.querySelector(".province select");
    var city = document.querySelector(".city select");
    var area = document.querySelector(".area select");
    var xhrP = new XMLHttpRequest();
    var xhrC = new XMLHttpRequest();
    var xhrA = new XMLHttpRequest();
    var cityList = [];
    var areaList = [];
    var baseHTML = `<option value="0">请选择</option>`;

    province.addEventListener("change",function(){
        if(this.value==0) {
            city.innerHTML = baseHTML;
        }else {
            getCity(this.value);
        }
        area.innerHTML = baseHTML;
    });

    city.addEventListener("change",function() {
        if(this.value==0) {
            area.innerHTML = baseHTML;
        }else {
            getArea(province.value,this.value);
        }
    });
    
    function getProvince() {
        ajaxGet(xhrP,urlP,function() {
            showSelection(JSON.parse(xhrP.responseText),province);
        });
    }
    getProvince();

    function getCity(province) {
        var current = [];
        if(cityList.length==0) {
            ajaxGet(xhrC,urlC,function(){
                cityList = JSON.parse(xhrC.responseText);
                for(let i=0;i<cityList.length;i++) {
                    if(cityList[i].preId==province) {
                        current = cityList[i];
                    }
                }
                showSelection(current.list,city);
            });
        }else {
            for(let i=0;i<cityList.length;i++) {
                if(cityList[i].preId==province) {
                    current = cityList[i];
                }
            }
            showSelection(current.list,city);
        }
    }

    function getArea(province,city) {
        var current = [];
        if(areaList.length==0) {
            ajaxGet(xhrA,urlA,function(){
                areaList = JSON.parse(xhrA.responseText);
                for(let i=0;i<areaList.length;i++) {
                    if(areaList[i].preId==province) {
                        current = areaList[i].list;
                        for(let j=0;j<current.length;j++) {
                            if(current[j].preId == city) {
                                current = current[j].list1;
                            }
                        }
                    }
                }
                showSelection(current,area);
            });
        }else {
            for(let i=0;i<areaList.length;i++) {
                if(areaList[i].preId==province) {
                    current = areaList[i].list;
                    for(let j=0;j<current.length;j++) {
                        if(current[j].preId == city) {
                            current = current[j].list1;
                        }
                    }
                }
            }
            showSelection(current,area);
        }
    }

    function showSelection(result,el) {
        var size = result.length;
        el.innerHTML = baseHTML;
        for(let i=0;i<size;i++) {
            let opn = `<option value="${result[i].id}">${result[i].name}</option>`;
            el.innerHTML += opn;
        }
    }

    function ajaxGet(xhr,url,callback) {
        xhr.open("get",url);
        xhr.send(null);
        xhr.addEventListener("readystatechange",function() {
            if(this.readyState == 4) {
                if(this.status == 200) {
                    callback();
                }else {
                    alert("failed!");
                }
            }
        });
    }
}())