/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 09/06/14
 * Time: 21:34
 * To change this template use File | Settings | File Templates.
 */


angular.module('mean').factory('Payment', ['$resource','Restangular', function($resource,Restangular) {
   /* return $resource('Payment/:PaymentID', {
        PaymentID: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });*/

    return Restangular.service('payment');
}]);