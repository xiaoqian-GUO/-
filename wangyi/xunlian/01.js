var str="(((())))";
var arr=str.split('');
var len=arr.length;
var i,j,index1=0,index2=0,count=0;
var rsu=[];
for(i=0;i<len;i++){
    count=0;
    for(j=i+1;j<len;j++){
        if(arr[i]=="(" && arr[j]==")"){
            arr[i]="";
            arr[j]="";
            if(isMatch(arr)){
                count++;
            }
            arr[i]="(";
            arr[j]=")";
        }
    }
    rsu.push(count);
    
}
console.log(rsu);

function isMatch(arr){
    var len=arr.length;
    var i;
    var flag=true;
    var leftCount=0,rightCount=0;
    for(i=0;i<len;i++){
        if(arr[i]=="("){
            leftCount++;
        }
        if(arr[i]==")"){
            rightCount++;
        }
        if(rightCount>leftCount){
            flag=false;
            return flag;
        }
    }
    if(leftCount!=rightCount){
        flag=false;
    }
    return flag;
}