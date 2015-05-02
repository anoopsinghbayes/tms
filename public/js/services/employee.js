/**
 * Created by swapnil on 02-May-15.
 */
'use strict';

//BP service used for BP REST endpoint
angular.module('mean').factory('Employees', ['Restangular', function(Restangular) {
    var _employeeService = Restangular.service('Employee',Restangular.all('businesspartner'));
    return{
        getEmployees:function(){
            return _employeeService.getList();
        },
        getEmployee:function(id){
            return _employeeService.one(id).get();
        },
        saveEmployee:function(employee){
            return _employeeService.post(employee);
        }
    };
}]);