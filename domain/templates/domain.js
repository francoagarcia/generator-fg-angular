(function(angular) {
	'use strict';
	angular.module('<%= appname %>').factory('<%= _.camelize(name) %>', <%= _.camelize(name) %>Service);

	/* @ngInject */
	<%= _.camelize(name) %>Service.$inject = ['$http'];
	function <%= _.camelize(name) %>Service($http){
		
		function <%= _.camelize(name) %>(){
			this.id = null; 
		}
		/* Instance methods def */
		<%= _.camelize(name) %>.prototype.instanceMethod = null;
		/* Class methods def */
		<%= _.camelize(name) %>.classMethod = null;

		/* Instance methods impl */
		<%= _.camelize(name) %>.prototype.instanceMethod = function(){
		};

		/* Class methods impl */
		<%= _.camelize(name) %>.classMethod = function(){
		};

		return <%= _.camelize(name) %>; /* Returns the constructor*/
	}
})(window.angular);
