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


	$("#animate").click(function(){
		$(".card").animate({width: "60%",}, 3000);
		$(".card").animate({left: "300px",}, 3000);
	});

	$("#stop").click(function(){
		$(".card").stop(true);
	});

});