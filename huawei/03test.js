var str="AGCTtAGCTt";
var arr=str.split("");
var i,j;
var len=arr.length;
var rsu="";
var leng=0;
for(i=0;i<len;i++){
    for(j=i+3;j<len;j++){
        var tmp=arr.slice(i,j+1);
        var arr1=arr.slice(0,i).join("");
        var arr2=arr.slice(j+1).join("");
        var str1=tmp.join("");
        if(arr1.indexOf(str1)!=-1 || arr2.indexOf(str1)!=-1){
            var subLen=str1.length;
            if(subLen>leng){
                leng=subLen;
                rsu=str1;
            }
        }
    }
}
console.log(rsu+" "+leng);