function LimitDrag(id) {
    Drag.call(this,id);//继承Drag的属性
}
for(var i in Drag.prototype){
    LimitDrag.prototype[i]=Drag.prototype[i];
}

LimitDrag.prototype.fnMove=function (ev)//重写父类fnMove
{
    var oEvent=ev||event;
    var l=oEvent.clientX-this.disX;
    var t=oEvent.clientY-this.disY;

    if(l<0)
    {
        l=0;//限制左边
    }
    else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)
    {
        l=document.documentElement.clientWidth-this.oDiv.offsetWidth;//限制右边
    }
    this.oDiv.style.left=l+'px';
    this.oDiv.style.top=t+'px';
};