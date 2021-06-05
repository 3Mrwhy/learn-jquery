$(document).ready(function(){

	//  each method


	/* @name: 		each 
	  @defination: 	it it used to loop the all given element
	*/ 
	$("li").each(function(){
		console.log($(this).text("hello"));
	});

	


});