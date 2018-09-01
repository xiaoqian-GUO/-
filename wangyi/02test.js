onmessage=function(e){
    console.log(e.data);
    postMessage("我是服务端的数据哦！");
}