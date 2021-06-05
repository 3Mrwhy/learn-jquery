$(document).ready(function(){

	// stopPropagation method


	/* @name: preventDefault
	  @defination: 	it is used to stop the parent element event
	*/ 

	$("#box").click(function(){

		alert("div clicked");

		

	});

	$("#heading").click(function(e){
		e.stopPropagation();
		alert("heading clicked");
	});


	$("#para").click(function(){
		alert("paragraph clicked");
	});


	$("#btn").click(function(){
		alert("btn clicked");
	});




});