'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Customer', ['$resource', function($resource) {
    return $resource('Customer/:CustomerId', {
        CustomerId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);