$(document).ready(function() {
	$('input[type="text"]').val('');
	$('input[type="tel"]').val('');
	$('input[type="Email"]').val('');
	$('textarea').val('');
	
	$('#top-recall').on('click', function() {
		$('#popup-container').css('display','flex');
	});

	$('#popup-container').on('click', function(event) {
		if (event.target === this ) {
			$('#popup-container').css('display','none');
		}
	});

	$('.close').on('click', function() {
		$('#popup-container').css('display','none');
	});

	$('#recall-popup button').on('click', function() {
		var data = {
			'name' : $('#recall-popup input[name="name"]').val(),
			'telefon' : $('#recall-popup input[name="tel"]').val(),
			'email' : $('#recall-popup input[name="email"]').val(),
			'message' : $("textarea").val(),
		};
		$.post('scripts/recall.php', data, function(response) {
			if (response == 'TEXT') {	
				$('#popup-container').css('display','none');
			}
		});
	});
});