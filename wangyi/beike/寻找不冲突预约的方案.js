var m=3;
var start=[1,20,16];
var end=[10,23,20];
var count=0;
for(var i=0;i<m;i++){
    // var tmp1=start.slice();
    // var tmp2=end.slice();
    var chr1=start.splice(i,1);
    var chr2=end.splice(i,1);
    if(isCollapse(start,end)){
        count++;
    }
    start.splice(i,0,chr1[0]);
    end.splice(i,0,chr2[0]);
}
console.log(count);


function isCollapse(arr1,arr2){
    var array1=arr1.slice();
    var array2=arr2.slice();
    var tmp1=[],tmp2=[];
    tmp1=array1.slice().sort((num1,num2)=>num1-num2);
    var i;
    var rsu=[];
    for(i=0;i<m;i++){
        var index=array1.indexOf(tmp1[i]);
        array1[index]="";
        rsu.push(tmp1[i]);
        rsu.push(array2[index]);
    }
    var flag=true;
    for(i=1;i<2*m;i++){
        if(rsu[i]<rsu[i-1]){
            flag=false;
            return flag;
        }
    }
    return flag;
}