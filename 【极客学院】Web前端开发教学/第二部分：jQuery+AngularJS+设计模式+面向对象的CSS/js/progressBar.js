$(function () {
    $("#pb").progressbar({value:50});//value默认进度条的值
});

var pb2;
var max=100;
var current=0;
$(document).ready(function () {
    pb2=$("#pb2");
    pb2.progressbar({max:100});//设定默认最大值为100
    setInterval(changepb2,100);
});

function changepb2(){
    current++;
    if(current>=100){
        current=0;//从0继续开始
    }
    pb2.progressbar("option","value",current)
}