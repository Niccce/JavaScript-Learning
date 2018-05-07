var valueSpan,slider;
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

    //menu
    $("#menu").menu({position:{at:"left bottom"}});
    //menu后的括号可以不带参数，那样出现位置就默认右上
    //此处让子菜单出现在左下

    //slider
    // $("#slider").slider();//简单添加slider
    valueSpan=$("#span");
    slider=$("#slider");
    // slider.slider({
    //     change:function (event,ui) {
    //         valueSpan.text(slider.slider("option","value"));
    //     }
    // });//放开鼠标后才显示当前slider的值

    slider.slider({
        slide:function (event,ui) {
            valueSpan.text(slider.slider("option","value"));
        }
    });//实时显示slider数值

    //spinner
    $("#spinner").spinner();
    $("#spinner").spinner("value","10");
    $("#btn3").on("click",function(){
        alert($("#spinner").spinner("value"));
    })

    //tabs
    $(function () {
        $("#tabs").tabs();
    });
});