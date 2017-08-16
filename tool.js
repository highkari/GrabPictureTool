var http = require("http");
var fs = require("fs");


function getPicture(url) {
    http.get(url, function(res){
        var imgData = "";
        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
        res.on("data", function(chunk){
            imgData+=chunk;
        });

        res.on("end", function(){
            fs.writeFile("./logonew.gif", imgData, "binary", function(err){
                if(err){
                    console.log(err);
                    console.log("down fail");
                }
                console.log("down success");
            });
        });
    });
}
//getPicture("http://127.0.0.1:8088/image/LogIcon.gif");

function openweb(url) {
    http.get(url, function(res){
        var data = "";
        res.on("data", function(chunk){
            data+=chunk;
        });
        res.on("end", function(){
            getPicture(getPicUrl(data));
        });
    });
}
function getPicUrl(html) {
    var regex = /src=(\S*)jpg/g;
    var test = "<img src=/test/LogIcon.jpg onclick=\"this.src='/test/img.jsp?' + new <img src=/fcs/nnnssv.jpg onclick=\"this.src='/test/img.jsp?' + new ";
    var arr = test.match(regex);
    for (i = 0 ;i < arr.length; i++) {
        console.log(arr[i].substring(4));
    }




}
getPicUrl();