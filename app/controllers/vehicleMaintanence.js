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
    ServiceOrder = mongoose.model('VehicleMaintenance'),
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



