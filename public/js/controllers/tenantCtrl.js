angular.module('mean').controller('TenantCtrl', ['$scope', '$stateParams', '$location', 'Global', 'Tenants', function ($scope, $stateParams, $location, Global, Tenants) {
	
    $scope.global = Global;
	
    $scope.create = function() {
        var tenants = new Tenants({
            name: $scope.name,
            _id: $scope._id
        });
        tenants.$save(function(response) {
			console.log(response);
            $location.path('tenants/' + response._id);
        });

        $scope.name = '';
        $scope._id = '';
    }
}]);