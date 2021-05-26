$(document).ready(function(){

	// on methods
	
	// apply  events
	$("#first-image").on({
		"click": function(){
			$(this).css({"height": "50px", "width": "50px"})
		},
		"mouseover": function(){
			$(this).css({"height": "500px", "width": "500px"})
		},
		"mouseout": function(){
			$(this).css({"height": "800px", "width": "800px"})
		}
	});

	// off method
	$("#no-event").click(function(){
		$("#first-image").off("mouseout mouseover");
	});
	
});