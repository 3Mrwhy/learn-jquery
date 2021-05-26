$(document).ready(function(){

$("#first-image").click(function(){

	let path = $(this).attr("src");

	$(".container").html();
	$(".container").css("border", "0px solid transparent");

	$(".container").html('<img id="boxImage">');
	$("#boxImage").attr("src", path);
	$("#boxImage").addClass("responsive");
});	

	
});