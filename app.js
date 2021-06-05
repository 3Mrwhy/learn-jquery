$(document).ready(function(){

	//  Has and is method


	/* @name: 		has method
	  @defination: 	it is used to target the descendant element of the tag
	*/ 
	$("p").has('span').css("background", "red");


	/* @name: 		is method
	  @defination: 	it is used to find the particular class, tag availabel of not
	*/ 
	$("p").click(function(){
		if($(this).parent().is('div')){
			console.log($(this).parent().is('div'));
		}
	});
	// if($('p').parent().is('div')) {
	// 	console.log($('p').parent().is('div'));
	// } else {
	// 	console.log("not find");
	// }


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
	// $("ul li").slice(1).css("background", "red");


	/* @name: 		nextUntil method
	  @defination: 	it is used to target the range of next elements
	*/ 
	// $("#b").nextUntil("#d").css("background", "red");


	/* @name: 		prevUntil method
	  @defination: 	it is used to target the range of prev elements
	*/ 
	// $("#d").prevUntil("#a").css("background", "red");


});