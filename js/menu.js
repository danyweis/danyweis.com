$(function(){
	var
	$menuLink = $('.menuLink');
	$menuPage = $('.menuPage');
	$close = $('.xBox');

	$menuLink.on('click', function(){
		$menuPage.fadeIn(1500);
	});
	$close.on('click', function(){
		$menuPage.fadeOut(1500);
	});
});
