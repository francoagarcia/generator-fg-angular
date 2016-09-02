/**
* @desc 
* @example 
*/
(function(angular) {
	'use strict';

	angular.module('<%= appname %>').filter('<%= _.camelize(name) %>', <%= _.camelize(name) %>);

	function <%= _.camelize(name) %>(){
		return <%= _.camelize(name)+'Result' %>;

		function <%= _.camelize(name)+'Result' %>(input,arg){
			return 'output';
		}
	}
	
})(window.angular);
