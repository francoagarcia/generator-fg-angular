/**
* @desc <%= ctrlname %> de <%= name %>.html
*/
(function(angular) {
	'use strict';

	angular.module('<%= appname %>').controller('<%= ctrlname %>', <%= ctrlname %>);

	/* @ngInject */
	<%= ctrlname %>.$inject = ['$scope'];

	function <%= ctrlname %>($scope){
		var vm = this;
		vm.title = "<%= ctrlname %>";
	}

})(window.angular);
