/**
* @desc 
* @example 
*/
(function(angular) {
	'use strict';
	angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

	function <%= _.camelize(name) %>() {
		var directive = {
			link: link,
			restrict: 'EA'
		};
		return directive;
		
		function link(scope, element, attrs, fn) {}	
	}

})(window.angular);