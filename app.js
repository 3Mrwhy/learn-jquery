$(document).ready(function(){

	/* @name: 		parent method
	  @defination: 	it is used to target the immediate parent
	*/ 
	//$(".content-container").parent().css("background", "red");


	/* @name: 		parents method
	  @defination: 	it is used to target the all parent
	*/ 
	//$(".content-container").parents(".inner-container").css("background", "red");



	/* @name: 		parentsUntil method
	  @defination: 	it is used to target the range of parents
	*/ 
	//$("#child-c").parentsUntil(".main-container").css("background", "red");


	/* @name: 		offsetParent method
	  @defination: 	it is used to target the parent which have property relative
	*/ 
	//$("#child-c").offsetParent().css("background", "red");
	

	/* @name: 		closet method
	  @defination: 	it is used to target closet matching parameter
	*/ 
	$("#child-c").closest("ul").css("background", "red");



});