var m=10,n=10;
var arr=["0,0,0,0,0,0,0,0,0,0","0,1,1,1,1,0,0,0,0,1","0,1,0,0,1,0,0,0,0,1","0,1,0,0,1,0,0,0,0,1","0,1,1,1,1,0,0,0,0,1","0,0,1,0,1,0,0,0,0,1","0,0,0,1,1,0,0,0,0,1","0,1,1,1,1,0,0,0,0,1","0,0,0,0,0,0,0,0,0,1","0,1,0,0,0,0,0,0,0,1"];
var rsu=[];
var i;
for(i=0;i<arr.length;i++){
    var tmp=arr[i].split(',');
    rsu[i]=tmp;
}
console.log(rsu);
var obj={};
var p=0,q=0;
var i=0,j=0;
for(i=0;i<m;i++){
    for(j=0;j<n;j++){
        if(rsu[i][j]==1){
            var array=change(rsu,i,j);
            var boolVal=array[0];
            var count=array[1];
            var str=array[2];
        }
    }
}

for(i=0;i<m;i++){
    for(j=0;j<n;j++){
        if(rsu[i][j]!=0 && rsu[i][j]!=1){
            if(rsu[i][j] in obj){
                obj[rsu[i][j]]+=1;
            }
            else{
                obj[rsu[i][j]]=1;
            }
        }
    } 
}
console.log(rsu);
console.log(obj);


function change(rsu,i,j){
    var x=i,y=j;
    var boolVal=false;
    var count=0;
    var str=i+"-"+j;
    var arr=[];
    var k;
    for(k=0;k<8;k++){
        // 8个方向
        if(k==0){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x++;
            }
        }
        if(k==1){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x++;
                y++;
            }
        }
        if(k==2){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                   
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                y++;
            }
        }
        if(k==3){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                    
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x--;
                y++;
            }
        }
        if(k==4){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                   
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x--;
            }
        }
        if(k==5){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                   
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x--;
                y--;
            }
        }
        if(k==6){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                   
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                y--;
            }
        }
        if(k==7){
            x=i,y=j;
            while(x>=0 && x<m && y>=0 && y<n){
                if(rsu[x][y]==1){
                    arr.push([x,y]);
                    count++;
                    
                }
                else if(rsu[x][y]!=0 && rsu[x][y]!=1){
                    boolVal=true;
                    str=rsu[x][y];
                    break;
                }
                else if(rsu[x][y]==0){
                    break;
                }
                x++;
                y--;
            }
        } 
    }
    for(k=0;k<arr.length;k++){
        rsu[arr[k][0]][arr[k][1]]=str;
    }
    return [boolVal,count,str];
}

