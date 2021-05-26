$(document).ready(function(){

	//  Clone method  
	
	$("#clone").click(function(){

		$("h1").clone().prependTo(".container2");
		$("p").clone().appendTo(".container2");

	});
	
});