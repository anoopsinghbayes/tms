'use strict';

//BP service used for BP REST endpoint
angular.module('mean.BP').factory('bussinesspartner', ['$resource', function($resource) {
    return $resource('bussinessPartners/:BPId', {
        BPId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);