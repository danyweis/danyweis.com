$(function(){
	var
	$aboutLink = $('.aboutLink');
	$aboutMe = $('.aboutMe');
	$close = $('.xBox');

	$aboutLink.on('click', function(){
		$aboutMe.fadeIn(1500);
	});
	$close.on('click', function(){
		$aboutMe.fadeOut(1500);
	});
});
