(function(angular) {
	'use strict';
	angular.module('<%= appname %>').factory('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

	/* @ngInject */
	<%= _.camelize(name) %>.$inject = ['$http'];
	function <%= _.camelize(name) %>($http){
		var <%= _.camelize(name).charAt(0).toLowerCase() + _.camelize(name).slice(1) %> = {
			variable : [],
			metodo : metodo
		};
		return <%= _.camelize(name).charAt(0).toLowerCase() + _.camelize(name).slice(1) %>;

		function metodo(){
			console.log( <%= _.camelize(name).charAt(0).toLowerCase() + _.camelize(name).slice(1) %>.variable );
		}
	}

})(window.angular);
