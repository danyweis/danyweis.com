$(function(){
	var
	$menuLink = $('.menuLink');
	$aboutMe = $('.aboutMe');
	$close = $('.xBox');

	$menuLink.on('click', function(){
		$aboutMe.fadeIn(1500);
	});
	$close.on('click', function(){
		$aboutMe.fadeOut(1500);
	});
});
