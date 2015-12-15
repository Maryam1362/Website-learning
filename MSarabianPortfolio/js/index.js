$(document).ready(function() {
    $('#multiscroll').multiscroll();
    $("button").click(testme);
   var clicks=0;
     function testme() {
    	clicks+=1;
  $( ".hidden" ).fadeToggle( "slow" );
  if(clicks%2==0){
 $("button").html("Click here to learn more");
}
else{
	$("button").html(" Click here to hide the text");

}
}
   
});