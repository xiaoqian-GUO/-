var num=3;
var str1="1 2 3";
var str2="3 3 3";
var arr1=str1.split(' ');
var arr2=str2.split(' ');
arr1=arr1.map(function(item){
    return parseInt(item);
});
arr2=arr2.map(function(item){
    return parseInt(item);
});
console.log(arr1);
console.log(arr2);
var len1=arr1.length;
var len2=arr2.length;
var i,j;
var count=0;
for(i=0;i<len1;i++){
    var amax=arr1[i];
    var bmin=arr2[i];
    for(j=i;j<len2;j++){
        if(arr1[j]>amax){
            amax=arr1[j];
        }
        if(bmin>arr2[j]){
            bmin=arr1[j];
        }
        if(amax<bmin){
            count++;
        }
    }
}
console.log(count);