(function(angular){
	'use strict';

	angular.module('<%= _.camelize(name) %>', ['ui.bootstrap','<%= routerModuleName %>','ngAnimate']);
	
	<% if (!uirouter) { %>
		angular.module('<%= _.camelize(name) %>').config(function($routeProvider) {
			/* Add New Routes Above */

		});
	<% } %>
	<% if (uirouter) { %>
		angular.module('<%= _.camelize(name) %>')
		.config(function($stateProvider) {
			/* Add New States Above */

		})
		.run(['$state', function($state){

		}]);
	<% } %>

})(window.angular);