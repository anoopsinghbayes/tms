/**
 * Created by swapnil on 16-Aug-14.
 */

var mongoose = require('mongoose'),
    Vehicle = mongoose.model('Vehicle'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Create a Vehicle
 */

exports.create = function(req, res) {
    Vehicle = mongoose.mtModel(req.user.tenant+'.Vehicle');
    var vm= new Vehicle(req.body);
    vm.user = req.user;

    vm.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                vm: vm
            });
        } else {
            res.jsonp(vm);
        }
    });
};

/**
 * Update a Vehicle
 */
exports.update = function(req, res) {
    Vehicle =mongoose.mtModel(req.user.tenant+'.Vehicle');

    Vehicle.findOne({_id: req.params.vehicleId},function(err,vehicle){

        vehicle =_.extend(vehicle, req.body);

        vehicle.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    vehicle: vehicle
                });
            } else {
                res.jsonp(vehicle);
            }
        });
    })
};