$(function(){
	$('#roll').on('click',function(){
		var randNum1 = Math.floor(Math.random() * 6 + 1);
		var randNum2 = Math.floor(Math.random() * 6 + 1);
		$('#cube1').removeClass().addClass('roll');
		$('#cube2').removeClass().addClass('roll');
		$('#cube1').addClass('show-' + randNum1);
		$('#cube2').addClass('show-' + randNum2);
		window.setTimeout(function(){
			$('#cube1').removeClass('roll');
			$('#cube2').removeClass('roll');
		},2000);
	});
});