function ajax(url,fnSuccess,fnFailed)
//url：打开什么文件，fnSuccess：成功时会去调用的函数,fnFailed：失败时调用的函数
{
    // 1.创建Ajax对象
    if(window.XMLHttpRequest)//IE6下XMLHttpRequest不存在会报错，而用没有定义的属性会显示undefined，因此加上window.
    {
        var oAjax=new XMLHttpRequest();
    }
    else
    {
        var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2.连接服务器*************************
    // open(方法,文件名,异步传输)
    oAjax.open('GET',url,true);


    // 3.发送请求*************************
    oAjax.send();


    // 4.接收返回*************************
    // 当Ajax与服务器之间有通信时，onreadystatechange事件会发生
    oAjax.onreadystatechange=function () {
        // oAjax.readyState();//浏览器和服务器，进行到哪一步了
        if(oAjax.readyState==4)//读取完成，但不代表成功（文件不存在...）
        {
            if(oAjax.status==200)//成功
            {
                fnSuccess(oAjax.responseText);
            }
            else
            {
                if(fnFailed)
                {
                    fnFailed(oAjax.status);
                }
            }

        }
    }
}