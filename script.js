$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$(".burger-open").toggleClass("open");
		$(".burger-close").toggleClass("open");
		$(".overlay").toggleClass("open");
		$("header").toggleClass("open");
		$("main").toggleClass("open");
		$("nav").toggleClass("open");
	});
});



