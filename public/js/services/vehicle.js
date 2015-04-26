/**
 * Created by Anoop on 4/26/2015.
 */


'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Vehicle', ['Restangular', function(Restangular) {
    //var customer;
    var _vehicleService=Restangular.service('Vehicle',Restangular.all('Item'));
    return{
        getVehicles:function(){
            return _vehicleService.getList();
        },
        getVehicle:function(id){
            return _vehicleService.one(id).get();
        },
        saveVehicle:function(vehicle){
            return _vehicleService.post(vehicle);
        }
    };

    //return Restangular.service('customers');
}]);