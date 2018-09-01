// 冒泡排序是稳定排序
var arr=[10,40,27,5,3,9,40];
sortNum(arr);
console.log(arr);

function sortNum(arr){
    var len=arr.length;
    var i,j;
    for(i=0;i<len-1;i++){
        for(j=len-2;j>=i;j--){
            if(arr[j]>arr[j+1]){
                var tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
}