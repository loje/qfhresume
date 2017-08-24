$(document).ready(function(){
	$(".build").height($(window).height());
	$(".earth").attr("style","bottom:-" + $(window).height()/4 + "px;height:" + $(window).height()/2 + "px;");

	$(".thedog").attr("style","bottom:" + ($(window).height()/4 - $(".thedog").height()/4)  + "px;left:" + ($(window).width()/2 - $(".thedog").width()/2) + "px;");
	
})