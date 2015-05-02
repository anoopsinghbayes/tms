/**
 * Created by anoop on 14/6/14.
 */

angular.module('mean').factory('TripOrder', ['Restangular', function(Restangular) {
    var _tripOrderService=Restangular.service('OTRP',Restangular.all('orders'));
    return{
        getOrders:function(){
            return _tripOrderService.getList();
        },
        getOrder:function(id){
            return _tripOrderService.one(id).get();
        },
        save:function(tripOrder){
            return _tripOrderService.post(tripOrder);
        }
    };
}]);