

// use the commented-out code for reference, or just write your own. 

function prepareEventHandlers(){

var myImage=document.getElementById("mainImage");

myImage.onclick= function(){
	alert("you clicked the image");
}

}


//top object which contains document.
//window.onload will be written once per page	

window.onload = function() {
	// prep anything we need to
   prepareEventHandlers();
};
