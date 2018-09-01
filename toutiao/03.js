var str="4 3".trim().split(' ');
var num1=parseInt(str[0]);
var num2=parseInt(str[1]);
var arr="10 3 7 5".split(' ');
var i;
var rsu=[];
for(i=0;i<num2;i++){
    rsu=rsu.concat(arr);
}
console.log(rsu);



// 写一个函数，用来查找所有的不曾下降过的序列
// 如果在第一个小时里，最小的数值不在最右侧，则长度为第一个小时内的不降的最大长度加上num2-1;
function maxLength(arr){
    var i;
    var obj={};
    var len=arr.length;
    for(i=0;i<len;i++){
        if(arr[i] in obj){
            obj[arr[i]]+=1;
        }
        else{
            obj[arr[i]]=[];
            obj[arr[i]]=1;
        }
    }
    
    
}