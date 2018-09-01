var num=parseInt(readline());
var arr1=[];
var i,j;
var count=0;
for(i=0;i<num;i++){
    var tmp=readline().split(' ').map(a=>parseInt(a));
    if(tmp[0]==0){
        arr1.push([i+1]);
    }
    else{
        tmp=tmp.slice(0,-1);
        tmp.push(i+1);
        arr1.push(tmp);
    }
}
// 通过循环判断相邻的，或者不相邻的是否能合并
var len1=arr1.length;
for(i=0;i<len1;i++){
    if(arr1[i]!=""){
        for(j=0;j<len1;j++){
            if(arr1[j]!=""){
                var tmp1=arr1[i];
                var tmp2=arr1[j];
                var rtn=isCollapse(tmp1,tmp2,i,j);
                if(rtn!=""){
                    arr1[i]=rtn;
                    arr1[j]="";
                }
            } // if
        }// for
    }// if   
} //for
for(i=0;i<len1;i++){
    if(arr1[i]!=""){
        count++;
    }
}
console.log(count);


// 用简单的方法判断是否重叠，直接判断长度是否变化
function isCollapse(arr1,arr2,i,j){
    if(i!=j){
        var len=arr1.length+arr2.length;
        var arr=arr1.concat(arr2);
        arr=[...new Set(arr)];
        if(arr.length<len){
            return arr;
        }
        else{
            return "";
        }
    }
    else{
        return "";
    }
   
}