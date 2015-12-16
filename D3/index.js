//$(document).ready(function(){
	d3.csv("data.csv",function(myArrayOfObjects){
		

var document = jsdom.jsdom(),
    svg = d3.select(document.body).append("svg");

		myArrayOfObjects.forEach(function(d){

			console.log(d.x + d.y);
		});
	});

//});