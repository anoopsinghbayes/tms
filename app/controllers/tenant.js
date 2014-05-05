'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Tenant = mongoose.model('Tenant'),
    _ = require('lodash');

/**
 * Create a tenant
 */
exports.create = function(req, res) {
	console.log(req);
	//var test={name:"test name3",_id:3};
    var ten = new Tenant(req.body);
    ten.user = req.user;

    ten.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                ten: ten
            });
        } else {
            res.jsonp(ten);
        }
    });
};
exports.show = function(req, res) {
    res.jsonp(req.ten);
};

exports.all = function(req, res) {
    Tenant.find().exec(function(err, tens) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tens);
        }
    });
};