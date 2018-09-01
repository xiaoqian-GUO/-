var count=4;
var time=10;
var arr=[0,3,2,7,7,8,8,0];
var len=arr.length/2;
var obj={};
var i;
var count=0;
var index=0;
var startTime=[],endTime=[];
for(i=0;i<len;i++){
    startTime.push(arr[i*2]);
    endTime.push(arr[i*2+1]);
}
var rsu=[];
for(i=1;i<len;i++){
    if(startTime[i]>=endTime[index]){
        rsu[i]=1;
        rsu[index]=1;
        index=i;
    }
    else{
        rsu[i]=0;
        rsu[index]=1;
        index=index;
    }
}
var rsuLen=rsu.length;
for(i=0;i<rsuLen;i++){
    if(rsu[i]==1){
        count+=1;
    }
}
console.log(count);