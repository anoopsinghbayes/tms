'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Customers', ['Restangular', function(Restangular) {
    return Restangular.service('customers');
}]);