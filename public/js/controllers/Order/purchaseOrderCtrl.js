/**
 * Created by Anoop on 2/7/2015.
 */
angular.module('mean').controller('purchaseOrderCtrl', ['$scope', function ($scope) {
    $scope.dismiss = function() {
        $scope.$dismiss();
    };

    $scope.save = function() {

            $scope.$close(true);

    };
}]);


