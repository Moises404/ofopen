(function () {
	console.log('Init SigninModalModule');

	// Init variables
	var backgroundModal = $('.background-modal'),
		SigninModalModule = $('.signin-modal');

	// methods object that holds all the functions
	var methods = {
		init: function () {
			methods.initClickHandlers();
		},
		initClickHandlers: function () {
			backgroundModal.on('click', function () {
				$(this).fadeOut();
				SigninModalModule.fadeOut();
			});
		}
	}

	window.SigninModalModule = methods;
})();