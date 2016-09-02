(function(angular) {
	'use strict';

	angular.module('<%= appname %>')
	.constant('<%= _.camelize(name) %>', {
		errorLogin: 'Bad username or password'
	});

})(window.angular);