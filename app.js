$(document).ready(function(){

	// fade methods
	$("#fadein").click(function(){
		$(".dropdownmenu").fadeIn("slow");
	});

	$("#fadeout").click(function(){
		$('.dropdownmenu').fadeOut("slow");
	});


	$("#toggle").click(function(){
		$(".dropdownmenu").fadeToggle("fast");
	});

});