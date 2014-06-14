/**
 * Created by anoop on 14/6/14.
 */

angular.module('mean').factory('Order', ['Restangular', function(Restangular) {
    return Restangular.service('payment');
}]);