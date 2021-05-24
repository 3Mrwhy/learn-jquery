$(document).ready(function(){

	// class methods
	
	
	// add class
	$("#addClass").click(function(){
		$(this).css({"background": "lightcoral", "color": "white", "border": 0});
		$(".container").addClass("bg-grey");
	});

	// remove class
	$("#removeClass").click(function(){
		$(".container").removeClass("bg-grey");
	});

	// 	toggle class
	$("#toggleClass").click(function(){
		$(".container").toggleClass("bg-coral");
	});

	
});