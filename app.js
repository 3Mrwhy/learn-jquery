$(document).ready(function(){

	// type method


	/* @name: type
	  @defination: 	it is used to get the triggered event
	*/ 

	$(document).mousemove(function(e){
		$(".result").on("click mouseover dbclick mouseout", function(e){
			$("h2").html((e.type));
		})
	});


});