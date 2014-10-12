/**
 * Created by Administrator on 26/07/14.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    VehicleFinance = mongoose.model('VehicleFinance'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Create a VehicleFinance
 */
exports.create = function(req, res) {
    VehicleFinance = mongoose.mtModel(req.user.tenant+'.VehicleFinance');
    var vf = new VehicleFinance(req.body);
    vf.user = req.user;

    vf.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                vf: vf
            });
        } else {
            res.jsonp(vf);
        }
    });
};

/**
 * Update a VehicleFinance
 */
exports.update = function(req, res) {
    VehicleFinance =mongoose.mtModel(req.user.tenant+'.VehicleFinance');

    VehicleFinance.findOne({_id: req.params.vehicleId},function(err,vehiclefinance){

        vehiclefinance =_.extend(vehiclefinance, req.body);

        vehiclefinance.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    vehiclefinance: vehiclefinance
                });
            } else {
                res.jsonp(vehiclefinance);
            }
        });
    })
};

/**
 * Find VehicleFinance by id
 */
exports.show = function(req, res, next) {
    VehicleFinance =mongoose.mtModel(req.user.tenant+'.VehicleFinance');
    VehicleFinance.findOne({_id: req.params.vehicleId}, function(err, vehiclefinance) {
        if (err){
            return next(err);
        }
        else{
            res.json(vehiclefinance);
        }

    });
};
/*
 Find all VehicleFinance
 */
exports.all = function(req, res) {
    VehicleFinance = mongoose.mtModel(req.user.tenant+'.VehicleFinance');
    VehicleFinance.find().sort('-created').exec(function(err, vehiclefinance) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(vehiclefinance);
            }
        });
};
