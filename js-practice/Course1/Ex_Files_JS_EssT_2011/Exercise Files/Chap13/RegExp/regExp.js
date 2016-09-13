var myRE = /hello/;
//or  var myRE = new RegExp ("hello");

var myString = "Does this sentence have the word hello in it?";
if ( myRE.test(myString) ) {
	console.log("Yes");
}
// calling test return true or false, if we call search we will get the exact position of the string"
//var myRE = /hello/;

//var myString = "Does this sentence have the word hello in it?";

var myNewString = myString.replace(myRE,"goodbye");
console.log(myString);
console.log(myNewString);