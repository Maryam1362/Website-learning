  function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    return color;
    }
   
    
    var createdTime= new Array(); 
    var clickedTime = new Array();
    var reactionTime= new Array();
    var i=0;
    var k= new Array();
    k=[0,0,0];
    var y=new Array();
    var count=0;
   


    function makeShape(){
    
    var x= Math.random();
    x=x*5000;
    var top=Math.random();
    top=top*400;
    var left=Math.random();
    left=left*700;
    setTimeout(function(){

       if(Math.random()<=0.3){
            k[0]=k[0]+1;
            document.getElementById("box").style.top=top+"px";
            document.getElementById("box").style.left=left+"px";
            //document.getElementById("box").style.right=right+"px";
            y[i]=getRandomColor();
            document.getElementById("box").style.backgroundColor=y[i];
            document.getElementById("box").style.display="block";
            
        }
        
        else if(Math.random()<0.6 && Math.random()>0.3){
            k[1]=k[1]+1;
            document.getElementById("Triangle").style.top=top+"px";
            document.getElementById("Triangle").style.left=left+"px";
            //document.getElementById("Circle").style.right=right+"px";
            document.getElementById("Triangle").style.borderleft=document.getElementById("Triangle").style.borderRight="200px solid transparent";
            y[i]=getRandomColor();
            document.getElementById("Triangle").style.borderBottom= "200px solid"+ y[i];
            document.getElementById("Triangle").style.borderTop= '0';
            //document.getElementById("Circle").style.display= "block";

        }

        else{
            k[2]=k[2]+1;
            document.getElementById("Circle").style.top=top+"px";
            document.getElementById("Circle").style.left=left+"px";
            //document.getElementById("Circle").style.right=right+"px";
            y[i]=getRandomColor();
            document.getElementById("Circle").style.backgroundColor= y[i];
            document.getElementById("Circle").style.display= "block";
        }    
        createdTime[i]=Date.now();
    
        },x);
    i++;
    
    }

    

    

    document.getElementById("box").onclick=function(){

        clickedTime[i]=Date.now();
        reactionTime[i]=(clickedTime[i]-createdTime[i])/1000;
        document.getElementById("time").innerHTML=reactionTime[i];
        this.style.display="none";

    
        if(i==10){
            var a = new Array();
            a[0]=0;
            for(var z=1;z<=10;z++){
                a[z]=a[z-1]+reactionTime[z];
            }
            if((y[1]==y[2]) || (y[1]==y[3]) || (y[1]==y[4]) || (y[1]==y[5]) || (y[1]==y[6]) || (y[1]==y[7]) || (y[1]==y[8]) || (y[1]==y[9]) || (y[1]==y[10])){
                    count=1;
                }
                if((y[2]==y[3]) || (y[2]==y[4]) || (y[2]==y[5]) || (y[2]==y[6]) || (y[2]==y[7]) || (y[2]==y[8]) || (y[2]==y[9]) || (y[2]==y[10])){
                    count=count+1;
                }
                 if((y[3]==y[4]) || (y[3]==y[5]) || (y[3]==y[6]) || (y[3]==y[7]) || (y[3]==y[8]) || (y[3]==y[9]) || (y[3]==y[10])){
                    count=count+1;
                }
                if((y[4]==y[5]) || (y[4]==y[6]) || (y[4]==y[7]) || (y[4]==y[8]) || (y[4]==y[9]) || (y[4]==y[10])){
                    count=count+1;
                }
                if((y[5]==y[6]) || (y[5]==y[7]) || (y[5]==y[8]) || (y[5]==y[9]) || (y[5]==y[10])){
                    count=count+1;
                }
                if((y[6]==y[7]) || (y[6]==y[8]) || (y[6]==y[9]) || (y[6]==y[10])){
                    count=count+1;
                }
                if((y[7]==y[8]) || (y[7]==y[9]) || (y[7]==y[10])){
                    count=count+1;
                }
                if((y[8]==y[9]) || (y[8]==y[10])){
                    count=count+1;
                }
                if(y[9]==y[10]){
                    count=count+1;
                }
            alert("You have tested your reaction time for 10 times. Your avarage reaction Time is "+ Math.floor(a[10]/10)+" seconds.");
            alert("You clicked on "+k[0]+" Boxes "+"and "+k[2]+" Circles and "+k[1]+" Triangels.");
            alert("You have seen "+(10-count)+ " different colors.");
            alert("You have seen the following colors :"+y.join(", "));
        }     
        else {
            makeShape();
        }
    
    }


    document.getElementById("Circle").onclick=function(){
        clickedTime[i]=Date.now();
        reactionTime[i]=(clickedTime[i]-createdTime[i])/1000;
        document.getElementById("time").innerHTML=reactionTime[i];
        this.style.display="none";
        if(i==10){
            var a=new Array();
            a[0]=0;
            for(var z=1;z<=10;z++){
                a[z]=a[z-1]+reactionTime[z];
            
            }
        
                if((y[1]==y[2]) || (y[1]==y[3]) || (y[1]==y[4]) || (y[1]==y[5]) || (y[1]==y[6]) || (y[1]==y[7]) || (y[1]==y[8]) || (y[1]==y[9]) || (y[1]==y[10])){
                    count=1;
                }
                if((y[2]==y[3]) || (y[2]==y[4]) || (y[2]==y[5]) || (y[2]==y[6]) || (y[2]==y[7]) || (y[2]==y[8]) || (y[2]==y[9]) || (y[2]==y[10])){
                    count=count+1;
                }
                 if((y[3]==y[4]) || (y[3]==y[5]) || (y[3]==y[6]) || (y[3]==y[7]) || (y[3]==y[8]) || (y[3]==y[9]) || (y[3]==y[10])){
                    count=count+1;
                }
                if((y[4]==y[5]) || (y[4]==y[6]) || (y[4]==y[7]) || (y[4]==y[8]) || (y[4]==y[9]) || (y[4]==y[10])){
                    count=count+1;
                }
                if((y[5]==y[6]) || (y[5]==y[7]) || (y[5]==y[8]) || (y[5]==y[9]) || (y[5]==y[10])){
                    count=count+1;
                }
                if((y[6]==y[7]) || (y[6]==y[8]) || (y[6]==y[9]) || (y[6]==y[10])){
                    count=count+1;
                }
                if((y[7]==y[8]) || (y[7]==y[9]) || (y[7]==y[10])){
                    count=count+1;
                }
                if((y[8]==y[9]) || (y[8]==y[10])){
                    count=count+1;
                }
                if(y[9]==y[10]){
                    count=count+1;
                }
            
            alert("You have tested your reaction time for 10 times. Your avarage reaction Time is "+ Math.floor(a[10]/10)+" seconds.");
            alert("You clicked on "+k[0]+" Boxes "+"and "+k[2]+" Circles and "+k[1]+" Triangels.");
            alert("You have seen "+(10-count)+ " different colors.");
            alert("You have seen the following colors : "+y.join(", "));
            
        }  
        else {
            makeShape();
        }
    }
    document.getElementById("Triangle").onclick=function(){
        clickedTime[i]=Date.now();
        reactionTime[i]=(clickedTime[i]-createdTime[i])/1000;
        document.getElementById("time").innerHTML=reactionTime[i];
        this.style.border="200px solid transparent";
        if(i==10){
            var a= new Array();
            a[0]=0;
            for(var z=1;z<=10;z++){
                a[z]=a[z-1]+reactionTime[z];
                
            }
            if((y[1]==y[2]) || (y[1]==y[3]) || (y[1]==y[4]) || (y[1]==y[5]) || (y[1]==y[6]) || (y[1]==y[7]) || (y[1]==y[8]) || (y[1]==y[9]) || (y[1]==y[10])){
                    count=1;
                }
                if((y[2]==y[3]) || (y[2]==y[4]) || (y[2]==y[5]) || (y[2]==y[6]) || (y[2]==y[7]) || (y[2]==y[8]) || (y[2]==y[9]) || (y[2]==y[10])){
                    count=count+1;
                }
                 if((y[3]==y[4]) || (y[3]==y[5]) || (y[3]==y[6]) || (y[3]==y[7]) || (y[3]==y[8]) || (y[3]==y[9]) || (y[3]==y[10])){
                    count=count+1;
                }
                if((y[4]==y[5]) || (y[4]==y[6]) || (y[4]==y[7]) || (y[4]==y[8]) || (y[4]==y[9]) || (y[4]==y[10])){
                    count=count+1;
                }
                if((y[5]==y[6]) || (y[5]==y[7]) || (y[5]==y[8]) || (y[5]==y[9]) || (y[5]==y[10])){
                    count=count+1;
                }
                if((y[6]==y[7]) || (y[6]==y[8]) || (y[6]==y[9]) || (y[6]==y[10])){
                    count=count+1;
                }
                if((y[7]==y[8]) || (y[7]==y[9]) || (y[7]==y[10])){
                    count=count+1;
                }
                if((y[8]==y[9]) || (y[8]==y[10])){
                    count=count+1;
                }
                if(y[9]==y[10]){
                    count=count+1;
                }
            
                
            alert("You have tested your reaction time for 10 times. Your avarage reaction Time is "+Math.floor(a[10]/10)+" seconds.");
            alert("You have clicked on "+k[0]+" Boxes "+"and "+k[2]+" Circles and "+k[1]+" Triangels.");
            alert("You have seen "+(10-count)+ " different Colours.");
            alert("You have seen the following colors :");
            alert("You have seen the following colors"+y.join(", "));
            
        }     
        else {
            makeShape();
        }
        
    }
  
     
    makeShape();