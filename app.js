$(document).ready(function(){

	/* @name: 		first method
	  @defination: 	it is used to target the first element of the entire page
	*/ 
	// $("p").first().css("background", "red");


	/* @name: 		last method
	  @defination: 	it is used to target the last element
	*/ 
	// $("ul li").last()./css("background", "red");


	/* @name: 		eq method
	  @defination: 	it is used to target the equation element
	*/ 
	// $("p").eq(0).css("background", "red");


	/* @name: 		Filter method
	  @defination: 	it is used to target the filterted element of the parameter
	*/ 
	// $("p").filter(".first-container").css("background", "red");
	

	/* @name: 		slice method
	  @defination: 	it is used to target the sliced element
	*/ 
	$("ul li").slice(1).css("background", "red");


	/* @name: 		nextUntil method
	  @defination: 	it is used to target the range of next elements
	*/ 
	// $("#b").nextUntil("#d").css("background", "red");


	/* @name: 		prevUntil method
	  @defination: 	it is used to target the range of prev elements
	*/ 
	// $("#d").prevUntil("#a").css("background", "red");


});