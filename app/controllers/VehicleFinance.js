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
