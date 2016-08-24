var mainTitle = document.getElementById("mainTitle");
console.log("This is an element of type:", mainTitle.nodeType);
//we have 3 kind of Nodes: elements, attributes and text

console.log("the Inner HTML is", mainTitle.innerHTML);

console.log("child node:", mainTitle.childNodes.length);


var myLinks=document.getElementsByTagName("li");
console.log("Links:",myLinks.length);
