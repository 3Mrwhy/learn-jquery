$(document).ready(function(){

	// keyboard events
	

	//key press / keydown
	$("body").keydown(function(){

		$(this).css("background", "lightblue");

	});

	//key up
	$("body").keyup(function(){

		$(this).css("background", "purple");

	});

});