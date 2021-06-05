$(document).ready(function(){

	//  page x and page y method


	/* @name: page x
	  @defination: 	it is used to get the x cooridinate of the cursor
	*/ 

	$(document).mousemove(function(e){
		$(".result").text("X: "+ e.pageX + " Y: " + e.pageY);
	});


});