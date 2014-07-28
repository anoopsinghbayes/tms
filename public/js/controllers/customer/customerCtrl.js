/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listCustomer', ['$scope','Customers', function ($scope,Customers) {

    //$scope.customers=
      Customers.getList().then(function(customers){

            $scope.customers=customers;

        });


}]);

angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers', function ($scope,Customers) {
    $scope.save = function() {
        customer = {
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

        };


        Customers.post(customer).then(function(response) {
            $location.path('customers/' + response._id);
        },function(data){
		console.log(data);
		});
    }
}]);
angular.module('mean').controller('editCustomerCtrl', ['$scope','Customers','$stateParams', function ($scope,Customers,$stateParams) {
   Customers.one($stateParams.customerId).get().then(function(data){
       console.log(data);
       $scope.customer=data;

   });
}]);