$(function(){
	$("a.shareBtn").click(function(){
		$("div.share").css("display","block");
	});
	$("div.share").click(function(){
		$(this).css("display","none");
	});
})