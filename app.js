$(document).ready(function(){

	// slide method
	$("#slidedown").click(function(){
		$(".dropdownmenu").slideDown("slow");
	});

	$("#slideup").click(function(){
		$('.dropdownmenu').slideUp("slow");
	});


	$("#slidetoggle").click(function(){
		$(".dropdownmenu").slideToggle(	);
	});


	$("#openMenu").click(function(){
		$(".dropdownmenu").slideToggle(	5000);
	});

});