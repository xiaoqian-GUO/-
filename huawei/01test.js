// var str=readline().trim();
// var arr=str.split(' ');
// var factory1=0,factory2=0;
// var count=Number(arr[0]);
// var price=Number(arr[1]);
// var sum=count*price;
// if(count>=3){
//     factory1=sum*0.7;
//     if(factory1>=50){
//         factory1-=10;
//     }
// }
// else{
//     factory1=sum;
//     if(factory1>=50){
//         factory1-=10;
//     }
// }
// if(sum>=10){
//     factory2=sum-2;
//     if(factory2>=99){
//         factory2-=6;
//     }
// }
// factory1=(Math.round(factory1*100)/100).toFixed(2);
// factory2=(Math.round(factory2*100)/100).toFixed(2);
// if(factory1<factory2){
//     console.log('1');
// }
// else if(factory1>factory2){
//     console.log('2');
// }
// else{
//     console.log('0');
// }

var str="5 2.30".trim();
var arr=str.split(' ');
var factory1=0,factory2=0;
var count=parseInt(arr[0]);
var price=parseFloat(arr[1]);
var sum=count*price;
if(count>=3){
    factory1=sum*0.7;
    if(factory1<50){
        factory1+=10;
    }
}
else{
    factory1=sum;
    if(factory1<50){
        factory1+=10;
    }
}

if(sum>=10){
    var num=Math.floor(factory2/10);
    factory2=sum-2*num;
    if(factory2<99){
        factory2+=6;
    }
}
else{
    factory2=sum+6;
}

factory1=(Math.round(factory1*100)/100).toFixed(2);
factory2=(Math.round(factory2*100)/100).toFixed(2);
if(factory1<factory2){
    console.log('1');
}
else if(factory1>factory2){
    console.log('2');
}
else{
    console.log('0');
}