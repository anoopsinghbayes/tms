/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listCustomer', ['$scope','Customers', function ($scope,Customers) {

    //$scope.customers=
      var promise=Customers.query().$promise;
        promise.then(function(data){
            $scope.customers=data;
           console.log($scope.customers);
        });


}]);

angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers', function ($scope,Customers) {
    $scope.save = function() {
        customer = new Customers({
            name: $scope.customer.name,
            contact: $scope.customer.contact,
            email: $scope.customer.email,
            address: $scope.customer.address,
            credit:{limit:$scope.customer.credit.limit,
                period:$scope.customer.credit.period
            },
            salesrep:{
                name:$scope.customer.salesrep.name,
                phoneno:$scope.customer.salesrep.phoneno
            }

        });


        customer.$save(function(response) {
            $location.path('customers/' + response._id);
        },function(data){
		console.log(data);
		});
    }
}]);
angular.module('mean').controller('editCustomerCtrl', ['$scope','Customers','$stateParams', function ($scope,Customers,$stateParams) {
   $scope.customer=Customers.get($stateParams.customerId);
}]);