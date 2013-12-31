'use strict';

angular.module('mean.BP').controller('BPController', ['$scope', '$routeParams', '$location', 'Global', 'bussinesspartner', function ($scope, $routeParams, $location, Global, bussinesspartner) {

	 $scope.find = function() {
        bussinesspartner.query(function(bps) {
            $scope.bps = bps;
        });
    };

    $scope.create = function() {
		console.log(this);
	
        var bp = new bussinesspartner({
			name: this.name,
            salesrep: this.salesrep,
        });
        bp.$save(function(response) {
            $location.path('bussinessPartners/' + response._id);
        });

        this.title = '';
        this.content = '';
    };
	
}]);