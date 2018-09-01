// var arr=[1,"xiaoqian",2,3,3,3,4,5];
// var set=new Set(arr);
// console.log(set.size);
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
// console.log(set.has('xiaoqian'));

// var map = new Map([["name","daipeng"],["age",24]]);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map);
// for(let v of map.entries()){
//     console.log(v);
// }

// var str=new URLSearchParams([["name","xiaoqian"],["age",18],["job","engineer"]]);
// str=str.toString();


// function stringToObj(obj,arr=[],index=0){
//     for(let item in obj){
//         arr[index++]=[item,obj[item]];
//     }
//     return new URLSearchParams(arr).toString();    
// }
// var obj={
//     name:100,
//     age:18,
//     job:200
// };
// console.log(stringToObj(obj));

// class A{
//     constructor(){
//         this.abc=function(){
//             console.log('abc');
//         }
//     }
//     ab(){
//         console.log("hello world");
//     }
// }
// class B extends A{
//     constructor(){
//         super();
//     }
// }

// var str="xiaoqian";
// const b=new B();
// A.prototype.a=function(str){
//     console.log(str);
// }
// b.a(str);
// b.ab();
// b.abc();

// var worker=new Worker("02test.js");
// worker.postMessage("我是客户端数据！");
// worker.onmessage=function(e){
//     console.log(e.data);
// }

// var Worker = require('webworker-threads').Worker; 
// var worker=new Worker(function(){
//     postMessage("i'm working before postMessage('ali')");
//     this.onmessage=function(event){
//         postMessage(event.data+" hi");
//         self.close();
//     } 
// });
// worker.onmessage=function(e){
//     console.log("worker said: "+e.data);
// }
// worker.postMessage('xiaoqian');

// // 手写快排
// var arr=[2,9,10,40,30,4,7,8,8];
// var len=arr.length;
// all(arr,0,len-1);
// console.log(arr);


// function all(arr,low,high){
//     var part;
//     if(low<high){
//         part=partation(arr,low,high);
//         all(arr,low,part-1);
//         all(arr,part+1,high);
//     }
// }




// function partation(arr,low,high){
//     var prio=arr[low];
//     while(low<high){
//         while(low<high && arr[high]>=prio){
//             high--;
//         }
//         swap(low,high,arr);
//         while(low<high && arr[low]<=prio){
//             low++;
//         }
//         swap(low,high,arr);
//     }
//     return low;
// }

// function swap(first,second,arr){
//     var tmp=arr[first];
//     arr[first]=arr[second];
//     arr[second]=tmp;
// }

// function bar(){
//     console.log(this.value);
// }
// var foo={
//     value:"xiaoqian",
// };
// Function.prototype.call2=function(context){
//     context.fn=this;
//     context.fn();
//     delete context.fn;
// }
// bar.call2(foo);

// 再把两种快排重新写一遍
// 1. 
var arr=[10,30,2,50,40,8,6];
var len=arr.length;
qsort(arr,0,len-1);
console.log(arr);

function fSort(arr,start,end){
    // 不能没有退出来的条件
    if(start>=end){
        return;
    }
    var i=j=start;
    var k=end;
    var key=arr[start];
    while(i<=k){
        if(arr[i]<key){
            swap(arr,i,j);
            i++;j++;
        }
        else if(arr[i]>key){
            swap(arr,i,k);
            k--;
        }
        else{
            i++;
        }
    }
    fSort(arr,start,j);
    fSort(arr,k+1,end);
}

function swap(arr,i,j){
    var tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;
}
// 2. 

function qsort(arr,low,high){
    var prio;
    if(low<high){
        prio=partation(arr,low,high);
        qsort(arr,low,prio-1);
        qsort(arr,prio+1,high);
    }
}

function partation(arr,low,high){
    var key=arr[low];
    while(low<high){
        while(low<high && arr[high]>=key){
            high--;
        }
        swap(arr,low,high);
        while(low<high && arr[low]<=key){
            low++;
        }
        swap(arr,low,high);
    }
    return low;
}





















