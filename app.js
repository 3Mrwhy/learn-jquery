$(document).ready(function(){

	// single click
	$(".container").click(function(){
		$(".container").css("background", "lightgrey");
	});

	// double click
	$(".container").dblclick(function(){
		$(".container").css("background", "orange");
	});

	// right click
	$(".container").contextmenu(function(){
		$(".container").css("background", "lightcoral");
	});

	// mouse enter
	$(".container").mouseenter(function(){
		$(".container").css("background", "tan");
	});

	// mouse leave
	$(".container").mouseleave(function(){
		$(".container").css("background", "purple");
	});

});