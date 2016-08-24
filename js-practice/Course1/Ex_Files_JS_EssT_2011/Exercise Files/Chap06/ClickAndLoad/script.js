

// use the commented-out code for reference, or just write your own. 

function prepareEventHandlers(){

var myImage=document.getElementById("mainImage");

myImage.onclick= function(){
	alert("you clicked the image");
}

}


//top object which contains document	

document.onload = function() {
	// prep anything we need to
   prepareEventHandlers();
};
