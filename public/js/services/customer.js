'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Customers', ['Restangular', function(Restangular) {
    //var customer;
    var _customerService=Restangular.service('customers');
    return{
        getCustomers:function(){
            return _customerService.getList();
        },
        getCustomer:function(id){
            return _customerService.one(id).get();
        },
        saveCustomer:function(customer){
          return _customerService.post(customer);
        },
        editCustomer:function(data)
        {

        }
    }

    //return Restangular.service('customers');
}]);