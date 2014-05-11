'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Customers', ['$resource', function($resource) {
    return $resource('customers/:customerId', {
        customerId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);