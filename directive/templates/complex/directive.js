/**
* @desc 
* @example 
*/
(function(angular) {
	'use strict';
	angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

	function <%= _.camelize(name) %>() {
		var directive = {
			restrict: 'EA',
			replace: true,
			scope: {  },
			templateUrl: '<%= htmlPath %>',
			link: link
		};
		return directive;

		function link(scope, element, attrs, fn) {} 
	}
	
})(window.angular);
