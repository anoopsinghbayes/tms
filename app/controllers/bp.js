'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    BussinessPartner = mongoose.model('BussinessPartner'),
    _ = require('lodash');

/**
 * Create a bussiness partner
 */
exports.create = function(req, res) {
    var bp = new BussinessPartner(req.body);
    bp.user = req.user;

    bp.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                bp: bp
            });
        } else {
            res.jsonp(bp);
        }
    });
};
exports.show = function(req, res) {
    res.jsonp(req.bp);
};

exports.all = function(req, res) {
    BussinessPartner.find().sort('-created').exec(function(err, bps) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });
};