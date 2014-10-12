/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 16/08/14
 * Time: 01:49
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    VehicleMaintenance = mongoose.model('VehicleMaintenance'),
    _ = require('lodash');


/**
 * Save vehicle Maintenance Order
 */
exports.create = function(req, res) {
    console.log(req);
    VehicleMaintenance =mongoose.mtModel(req.user.tenant+'.VehicleMaintenance');
    var vehicleMaintenance = new VehicleMaintenance(req.body);
    vehicleMaintenance.user = req.user;

    vehicleMaintenance.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                vehicleMaintenance: vehicleMaintenance
            });
        } else {
            res.jsonp(vehicleMaintenance);
        }
    });
};

/**
 * Update a Vehicle Maintenance
 */
exports.update = function(req, res) {
    VehicleMaintenance =mongoose.mtModel(req.user.tenant+'.VehicleMaintenance');

    VehicleMaintenance.findOne({_id: req.params.vehicleId},function(err, vehicleMaintenance){

        vehicleMaintenance =_.extend(vehicleMaintenance, req.body);

        vehicleMaintenance.save(function(err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    vehicleMaintenance: vehicleMaintenance
                });
            } else {
                res.jsonp(vehicleMaintenance);
            }
        });
    })
};

/**
 * Find Vehicle Maintenance by id
 */
exports.show = function(req, res, next) {
    VehicleMaintenance =mongoose.mtModel(req.user.tenant+'.VehicleMaintenance');
    VehicleMaintenance.findOne({_id: req.params.vehicleId}, function(err, vehiclemaintenance) {
        if (err){
            return next(err);
        }
        else{
            res.json(vehiclemaintenance);
        }

    });
};
/*
 Find all Vehicle Maintenance
 */
exports.all = function(req, res) {
    VehicleMaintenance = mongoose.mtModel(req.user.tenant+'.VehicleMaintenance');
    VehicleMaintenance.find().sort('-created').exec(function(err, vehiclemaintenance) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(vehiclemaintenance);
        }
    });
};
