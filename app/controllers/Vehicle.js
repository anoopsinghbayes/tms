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

/**
 * Find Vehicle by id
 */
exports.show = function(req, res, next) {
    Vehicle =mongoose.mtModel(req.user.tenant+'.Vehicle');
    Vehicle.findOne({_id: req.params.VehicleId}, function(err, vehicle) {
        if (err){
            return next(err);
        }
        else{
            res.json(vehicle);
        }

    });
};
/*
 Find all Vehicle
 */
exports.all = function(req, res) {
    //check for search query string
    //and parse the query string to json to use further
    var searchQuery=qs.parse(req.query);
    Vehicle =mongoose.mtModel(req.user.tenant+'.Vehicle');
    if (searchQuery.vehicleNumber) {
        //for like query on name
        var regex = new RegExp(searchQuery.vehicleNumber, 'i');
        Vehicle.find({vehicleNumber: regex})
            .select('vehicleNumber purchaseDate registrationDate garageName').exec(function(err, vehicle) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(vehicle);
                }
            });
    }
    else
    {
        Vehicle.find().sort('-created').exec(function(err, vehicle) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(vehicle);
            }
        });
    }

};
