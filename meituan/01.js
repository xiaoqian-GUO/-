//  function transferReverse(str){
//     var arr=str.split(' ');
//     arr.reverse();
//     var rsu=arr.join(' ');
//     return rsu;
//  }
//  var str="the sky is blue";
//  console.log(transferReverse(str));

 function transferReverse(str){
    var arr=str.split(' ');
    var len=arr.length;
    var i;
    var rsu="";
    for(i=len-1;i>=0;i--){
        rsu+=arr[i]+" ";
    }
    return rsu;
 }
 var str="the sky is blue";
 console.log(transferReverse(str));