/**
 * Created by anoop on 14/6/14.
 */

angular.module('mean').factory('Order', ['Restangular', function(Restangular) {
    var _customerService=Restangular.service('Customer',Restangular.all('businesspartner'));
    return{
        getCustomers:function(){
            return _customerService.getList();
        },
        getCustomer:function(id){
            return _customerService.one(id).get();
        },
        saveCustomer:function(customer){
            return _customerService.post(customer);
        }
    };
}]);