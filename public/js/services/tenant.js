'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('Tenants', ['$resource', function($resource) {
    return $resource('tenants/:_id', {
        //_id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);