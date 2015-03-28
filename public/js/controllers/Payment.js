/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 09/06/14
 * Time: 21:38
 * To change this template use File | Settings | File Templates.
 */


angular.module('mean').controller('PaymentEntryCtrl', ['$scope', 'Payment', function ($scope, Payment) {
    $scope.save = function () {
        Payment.post(
            // PaymentID: $scope.Payment.PaymentID,
//            PaymentDate:$scope.Payment.PaymentDate,
//            PaymentRelDate:$scope.Payment.PaymentRelDate,
//            PaymentFrom:$scope.Payment.PaymentFrom,
//            PaymentTo:$scope.Payment.PaymentTo,
//            PaymentMode:$scope.Payment.PaymentMode,
//            UnAllocatedAmount:$scope.Payment.UnAllocatedAmount
        $scope.Payment
        );
        console.log($scope);
    }
}]);