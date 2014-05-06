'use strict';

angular.module('mean').controller('BPController', ['$scope', '$routeParams', '$location', 'Global', 'Customer', function ($scope, $routeParams, $location, Global, Customer) {

	 $scope.find = function() {
        Customer.query(function(bps) {
            $scope.bps = bps;
        });
    };

    $scope.create = function() {
		
	
        var customer = new Customer({
			name: this.name,
            salesrep: this.salesrep,
        });
        customer.$save(function(response) {
            $location.path('customers/' + response._id);
        });

        this.title = '';
        this.content = '';
    };
	
}]);