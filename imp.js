var count=0;
var win=0;
var Arr=[[0,0,0],[0,0,0],[0,0,0]];
Arr[0][0]==1;
Arr[0][1]==1;
Arr[0][2]==1;


function btn00(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[0][0]==0){
            if(count<3||win==0){
                document.getElementById('btn00').innerHTML="X";
                checkwin();
                Arr[0][0]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                console.log("hi adi");
                
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                    checkwin();


            }
        }

    }
    else{
        
    }
}
function btn01(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[0][1]==0){
            if(count<3||win==0){
                document.getElementById('btn01').innerHTML="X";
                Arr[0][1]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{
                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}
function btn02(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[0][2]==0){
            if(count<3||win==0){
                document.getElementById('btn02').innerHTML="X";
                Arr[0][2]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}

function btn10(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[1][0]==0){
            if(count<3||win==0){
                document.getElementById('btn10').innerHTML="X";
                Arr[1][0]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}

function btn11(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[1][1]==0){
            if(count<3||win==0){
                document.getElementById('btn11').innerHTML="X";
                Arr[1][1]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4)
                {
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
           
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}

function btn12(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[1][2]==0){
            if(count<3||win==0){
                document.getElementById('btn12').innerHTML="X";
                Arr[1][2]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4)
                {
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}

function btn20(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[2][0]==0){
            if(count<3||win==0){
                document.getElementById('btn20').innerHTML="X";
                Arr[2][0]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
         
    }
}

function btn21(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[2][1]==0){
            if(count<3||win==0){
                document.getElementById('btn21').innerHTML="X";
                Arr[2][1]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}

function btn22(){
    // document.getElementById('btn').innerHTML="X";
    if (win==0){
        if(Arr[2][2]==0){
            if(count<3||win==0){
                document.getElementById('btn22').innerHTML="X";
                Arr[2][2]=1;
                var x= Math.floor(Math.random() * (2 + 1));
                var y=Math.floor(Math.random() * (2 + 1));
                if (count<4){
                    while(Arr[x][y]==1||Arr[x][y]==2){
                        var x= Math.floor(Math.random() * (2 + 1));
                        var y=Math.floor(Math.random() * (2 + 1));   
                    }
                    Arr[x][y]=2;
                    console.log(x,y);
                    string="btn";
                    // var a=toString(x);
                    string=string.concat(x.toString());
                    string=string.concat(y.toString());
                    console.log(string);
                    document.getElementById(string).innerHTML="o";
                    count++;
                }
                else{

                }
            }
            else{
                checkwin();
            }
        }

    }
    else{
        
    }
}
function checkwin(){
    if(Arr[0][0]==1&&Arr[0][1]==1&&Arr[0][2]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[0][0]==1&&Arr[1][0]==1&&Arr[2][0]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[1][0]==1&&Arr[1][1]==1&&Arr[2][2]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[1][0]==1&&Arr[1][1]==1&&Arr[1][2]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[2][0]==1&&Arr[2][1]==1&&Arr[2][2]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[0][2]==1&&Arr[1][1]==1&&Arr[2][0]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[0][1]==1&&Arr[1][1]==1&&Arr[2][1]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }
    if(Arr[0][2]==1&&Arr[1][2]==1&&Arr[2][2]==1){
        document.getElementById('result').innerHTML="USER WON";   
    }

}


