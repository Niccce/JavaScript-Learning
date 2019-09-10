$(document).ready(function () {
    $("#input-1").on("input propertychange", function() {
        let phoneExp=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        inputChange($('#input-1'),$('#phoneNumberId'),phoneExp,"请输入正确的手机格式！！");
    });
    $("#input-2").on("input propertychange", function() {
        let emailExp=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        inputChange($('#input-2'),$('#emailId'),emailExp,"请输入正确的邮箱格式！！");
    });
    $("#input-3").on("input propertychange", function() {
        let nameExp=/^.{1,20}$/;
        inputChange($('#input-3'),$('#nameId'),nameExp,"请输入1-20个字符！！");
    });
    $("#input-4").on("input propertychange", function() {
        let descriptionExp=/^.{1,}$/;
        inputChange($('#input-4'),$('#descriptionId'),descriptionExp,"内容不能为空！！");
    });
});
function inputChange(id,spanId,exp,txt) {
    let name=id;
    let nameArea=name.val();
    let nameSpan=$(spanId);
    if(exp.test(nameArea)){
        //合格
        nameSpan.text("");
        name.css("border-color","green");
        return true;
    }else{
        //不合格
        name.css("border-color","red");
        name.focus();
        nameSpan.text(txt);
        /*name.popover();*/
        return false;
    }
}
