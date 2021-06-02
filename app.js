$(document).ready(function(){

	/* @name: 		siblings method
	  @defination: 	it is used to target the all sibligs elements
	*/ 
	// $("h1").siblings(".inner-container").css("background", "red");


	/* @name: 		next method
	  @defination: 	it is used to target the next immediate siblings
	*/ 
	// $("#child-c").next().css("background", "red");


	/* @name: 		prev method
	  @defination: 	it is used to target the prev immediate siblings
	*/ 
	//$("#child-c").prev().css("background", "red");


	
	/* @name: 		prevAll method
	  @defination: 	it is used to target the prev all immediate siblings
	*/ 
	// $("#child-c").prevAll().css("background", "red");
	

	/* @name: 		nextAll method
	  @defination: 	it is used to target the next all immediate siblings
	*/ 
	// $("#child-c").nextAll().css("background", "red");


	/* @name: 		nextUntil method
	  @defination: 	it is used to target the range of next elements
	*/ 
	// $("#b").nextUntil("#d").css("background", "red");


	/* @name: 		prevUntil method
	  @defination: 	it is used to target the range of prev elements
	*/ 
	$("#d").prevUntil("#a").css("background", "red");


});