$('.timepickerInputWrap input').keypress(function(e) {
	e.preventDefault();
});

$('.timepickerWrap').each(function() { 

	var getHours;

	var timepicker_hours = $(this).find('.timepicker .hours div');

	timepicker_hours.click(function() {

		$('.timepicker .hours div').removeClass('j-selected');
		$(this).addClass('j-selected');

		getHours = $(this).text();
		
	});

	var getMinutes;

	var timepicker_minutes = $(this).find('.timepicker .minutes div');

	timepicker_minutes.click(function() {

		$('.timepicker .minutes div').removeClass('j-selected');
		$(this).addClass('j-selected');

		getMinutes = $(this).text();

	});


	var getAmpm;

	var timepicker_ampm = $(this).find('.timepicker .ampm div');

	timepicker_ampm.click(function() {

		$('.timepicker .ampm div').removeClass('j-selected');
		$(this).addClass('j-selected');

		getAmpm = $(this).text();

	});

	$(this).find('.set').click(function() { 
		if (getHours.type !== "undefined" && getMinutes.type !== "undefined" && getAmpm.type !== "undefined") {

			$(this).parents('.timepicker').siblings('.timepickerInputWrap').find('input').val(getHours+":"+getMinutes+":"+getAmpm);
			$(this).parents('.timepicker').hide();
		}
	});

});