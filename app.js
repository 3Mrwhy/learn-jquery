$(document).ready(function(){

	// Append and prepend
	
	//append
	$("#append").click(function(){
		$("ol").append("<li> Append </li>");
	})

	//prepend
	$("#prepend").click(function(){
		$("ol").prepend("<li> prepend </li>");
	})
	
});