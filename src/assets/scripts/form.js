$(document).ready(function(){
	$('form').on('submit',function(e){
		e.preventDefault();
		$(this).animate({
			width: 0,
			opacity: 0
		},700);//end animate
	}); //end submit

	$('form input:first').on('focus',function(){
		$(this).next().text('chika-chika');
	}); //end focus

	$('form input:nth-child(5)').on('focus',function(){
		$(this).next().text('Slim shady!');
	});


});