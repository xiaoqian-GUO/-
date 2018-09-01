// 比较两个字符串是否是双生词
function isDouble(str1,str2){
    var len1=str1.length;
    var len2=str2.length;
    var i;
    if(len1!=len2){
        return false;
    }
    for(i=0;i<len1;i++){
        var tmp=str1.slice(i)+str1.slice(0,i);
        var tmp2=tmp.split('').reverse().join('');
        if(tmp==str2 || tmp2==str2){
            return true;
        }
    }
    for(i=0;i<len2;i++){
        var tmp=str2.slice(i)+str2.slice(0,i);
        var tmp2=tmp.split('').reverse().join('');
        if(tmp==str1 || tmp2==str1){
            return true;
        }
    }
    return false;
}
/* 
helloworld
worldhello

abcde
acbde
*/
var str1="helloworld";
var str2="worldhello";
console.log(isDouble(str1,str2));


function last(arr){
    var len=arr.length;
    var i,j;
    for(i=0;i<len;i++){
        for(j=i+1;j<len;j++){
            if(isDouble(arr[i],arr[j])){
                return true;
            }
        }
    }
    return false;
}

var arr=["abcde","acbde"];
console.log(last(arr));