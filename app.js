$(document).ready(function(){

	// Append and prepend
	
	//append
	$("#append").click(function(){
		$(".container").append("<h1> Append </h1>");
	})

	//prepend
	$("#prepend").click(function(){
		$(".container").prepend("<h1> prepend </h1>");
	})
	

	//after
	$("#after").click(function(){
		$(".container").after("<h1> Append </h1>");
	})

	//before
	$("#before").click(function(){
		$(".container").before("<h1> prepend </h1>");
	})
	
});