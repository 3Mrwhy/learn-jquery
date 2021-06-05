$(document).ready(function(){

	// preventDefault method


	/* @name: preventDefault
	  @defination: 	it is used to stop the default event of the element
	*/ 

	$("#link").click(function(e){

		e.preventDefault();

		let a = e.isDefaultPrevented();
		console.log(a);	

	});

});