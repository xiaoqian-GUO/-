var str="()(()())";
var arr=str.split('');
var len=arr.length;
var i,j,index1=0,index2=0,count=0;
var result=[];
var count=0;
for(i=0;i<len;i++){
    for(j=i+1;j<len;j++){
        if(arr[i]=="(" && arr[j]==")"){
            var tmp=arr.slice(i,j+1);
            if(isMatch(tmp)){
                result.push(tmp);
            }
           
        }
    } 
}
result.forEach(function(item){
    var len=item.length;
    if(len>count){
        count=len;
    }
});
console.log(count);

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
        if(arr[i]!="(" && arr[i]!=")"){
            flag=false;
            return flag;
        }
    }
    if(leftCount!=rightCount){
        flag=false;
    }
    return flag;
}