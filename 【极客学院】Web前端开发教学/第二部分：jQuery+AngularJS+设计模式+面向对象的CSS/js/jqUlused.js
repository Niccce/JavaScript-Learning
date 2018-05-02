$(document).ready(function () {
    $("#aBtn").button();

    //draggable和droppable的使用
    $("#div1").draggable();
    $("#div2").droppable();
    $("#div2").on("drop",function (event,ui) {
        $("#div2").text("drop事件")
    });

    //resizeable的使用
    $("#div3").resizable();

    //selectable的使用
    $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function () {
        if($("#right").hasClass("ui-selected")){
            alert("恭喜你答对啦！")
        }
    });

    //sortable的使用
    $("#sortable").sortable();

    //Accordion
    $("#accordion").accordion();

    //AutoComplete的使用
    var autoTags=["even","img","javascript","image","lovely","ios"];//定义数组
    $("#tags").autocomplete({
        source:autoTags
    });

    //datepicker
    $("#datePicker").datepicker();

    //dialog
    $("#btn2").button();
    $("#btn2").on("click",function () {
        $("#divDiolog").dialog();
    });
});