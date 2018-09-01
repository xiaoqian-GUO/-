var n=8;
var arr=[1,4,8,9,5,4,3,3];
var rsu=arr.reduce((pre,cur)=>pre+cur)-Math.min.apply(null,arr);
console.log(rsu);