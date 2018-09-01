// var a,x=1;
// a=function (x){
//     return x+1;
// }
// console.log(a);
// console.log(x+1);
// function a(x){
//     return x+4;
// }
// console.log(a);
// console.log(x+1);

// var a;
// function a(x){
//     console.log(x+1);
// }
// console.log(a);

var obj={
    a:function(){
        console.log(this);
        (function(){
            // 此处this指向全局变量global
            console.log(this);
        }
        )()
    }
}
obj.a();