/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 09/06/14
 * Time: 21:38
 * To change this template use File | Settings | File Templates.
 */


angular.module('mean').controller('PaymentEntryCtrl', ['$scope', 'Accounts','$http', function ($scope, Accounts, $http) {
    /*$scope.save = function () {
        Accounts.post(
            // PaymentID: $scope.Payment.PaymentID,
//            PaymentDate:$scope.Payment.PaymentDate,
//            PaymentRelDate:$scope.Payment.PaymentRelDate,
//            PaymentFrom:$scope.Payment.PaymentFrom,
//            PaymentTo:$scope.Payment.PaymentTo,
//            PaymentMode:$scope.Payment.PaymentMode,
//            UnAllocatedAmount:$scope.Payment.UnAllocatedAmount
        $scope.Accounts
        );
        console.log($scope);
    }*/

    $scope.save =  $http({
        url: '/accounts/'+$scope.Accounts.AccountType,
        method: "POST",
        data: $scope.Accounts,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data, status, headers, config) {
            $scope.Accounts = data; // assign  $scope.persons here as promise is resolved here
        }).error(function (data, status, headers, config) {
            $scope.status = status;
        });

}]);