// var num=10.235;
// console.log((Math.round(num*100)/100).toFixed(2));

// var num=5;
// var str="4 5 9 2 5";
// var arr=str.split(' ');
// console.log(arr);
// arr=arr.map(function(item){
//     return parseInt(item);
// });
// console.log(arr);
// // 找出海拔最低的，去掉该项，其余项相加即为结果
// var min=Math.min.apply(null,arr);
// var all=arr.reduce(function(pre,cur){
//     return pre+cur;
// });
// var rsu=all-min;
// console.log(rsu);

var num=3;
var start=[3,20,3];
var end=[10,30,5];
var len=3;
var count=0;
for(var i=0;i<len;i++){
    var tmp1=start.slice();
    tmp1.splice(i,1);
    var tmp2=end.slice();
    tmp2.splice(i,1);
    if(isCollapse(tmp1,tmp2)){
        count++;
    }
}

console.log(count);
function isCollapse(arr1,arr2){
    var i;
    var array1=[];
    var array2=arr2.slice().sort(function(num1,num2){
        return num1-num2;
    });
    array1=[];
    var len=array2.length;
    for(i=0;i<len;i++){
        var index=arr2.indexOf(array2[i]);
        arr2[index]="";
        array1.push(arr1[index]);
    }
    arr1=array1;
    arr2=array2;

    var len=arr1.length;
    var sliceArr=arr1.slice();
    var tmp=sliceArr.sort(function(num1,num2){
        return num1-num2;
    });
    
    var result=[];
    for(i=0;i<len;i++){
        result.push(tmp[i]);
        var index=arr1.indexOf(tmp[i]);
        arr1[index]="";
        result.push(arr2[index]);
    }
    var lens=result.length;
    for(i=1;i<lens;i++){
        if(result[i]<result[i-1]){
            return false;
        }
    }
    return true;
}