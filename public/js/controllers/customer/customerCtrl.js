/**
 * Created by anoop on 19/4/14.
 */
angular.module('mean').controller('listCustomer', ['$scope','Customers', function ($scope,Customers) {

    //$scope.customers=

      Customers.getCustomers().then(function(customers){

            $scope.customers=customers;

        });


}]);

angular.module('mean').controller('createCustomerCtrl', ['$scope','Customers','$state','toaster', function ($scope,Customers,$state,toaster) {
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


        Customers.saveCustomer(customer).then(function(response) {
            console.log(response);
            toaster.pop('success', "Customer Created", response._id);
            $state.go('customers.edit'  ,{'customerId': response._id});
        },function(data){
		console.log(data);
		});
    }
}]);
angular.module('mean').controller('editCustomerCtrl', ['$scope','Customers','$stateParams','toaster', function ($scope,Customers,$stateParams,toaster) {
    console.log('state params customer id:',$stateParams.customerId);
    Customers.getCustomer($stateParams.customerId).then(function(data){
       console.log(data);
       $scope.customer=data;
        $scope.save=function(){
            console.log($scope.customer);
            $scope.customer.put();
            toaster.pop('success','Customer Updated',data._id);
        }
   });
}]);