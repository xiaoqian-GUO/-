var example=["1,79;32,45","78,94;5,16","80,100;200,220;16,32"];
var lines=3;
var arr=[];
for(i=0;i<lines;i++){
    var tmpArr=example[i].split(';');
    arr.push(...tmpArr);    
}
var len=arr.length;
var obj={};
for(i=0;i<len;i++){
    var array=arr[i].split(',');
    var key=parseInt(array[0]);
    var value=parseInt(array[1]);
    if(key in obj){
        // 如果起点相同，则合并区间，选择value值较大的那个
        var num1=obj[key];
        if(value>num1){
            obj[key]=value;
        }
    }
    else{
        obj[key]=value;
    }
}
obj=minRange(obj);
var keys=Object.keys(obj);
var rsu="";
for(i=0;i<keys.length;i++){
    if(obj[keys[i]]){
        rsu+=keys[i]+","+obj[keys[i]]+";"
    }
}
var lenRsu=rsu.length;
rsu=rsu.slice(0,lenRsu-1);
console.log(rsu);


//合并对象的区间
function minRange(obj){
    var index=0;
    var keys=Object.keys(obj);
    var len=keys.length;
    var i;
    for(i=1;i<len;i++){
        var key1=parseInt(keys[index]);
        var key2=parseInt(keys[i]);
        var value1=parseInt(obj[key1]);
        var value2=parseInt(obj[key2]);
        // 分情况判断该如何合并这两者
        if(key2>value1){
            // 无法合并
            index=i;
        }
        else if(key2<=value1 && value2>=value1){
            obj[key1]=value2;
            obj[key2]="";
            index=index;
        }
        else if(key2<=value1 && value2<=value1){
            obj[key2]="";
            index=index;
        }
    }
    return obj;
}