$(document).ready(function(){

	// form events
	
	// focus event
	$("#sname, #sclass, #scountry").focus(function(){
		$(this).css("background", "green");
	});

	// blur event
	$("#sname, #sclass, #scountry").blur(function(){
		$(this).css("background", "");
	});

	// change event
	$("#scountry").change(function(){
		let a = $(this).val();
		$(".test").html(a);
	});

	// select event
	$("#sname, #sclass").select(function(){
		$(this).css("background", "yellow");
	});

	// Submit event
	$("#sform").submit(function(){
		alert("form submit");
	});

});