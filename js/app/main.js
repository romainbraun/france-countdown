define([
	'jquery',
	'countdown',
	'RAF'
], function ($, Countdown, RAF) {

	function update() {
		var countdown = Countdown(null,new Date(2015,1,26));
		$('.countdown').html(countdown.toString());

		window.requestAnimationFrame(update);
	}

	function hideOverlay() {
		$('.overlay').addClass('hidden');
	}

	update();
	hideOverlay();
})