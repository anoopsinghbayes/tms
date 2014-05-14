'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
   	Customer = mongoose.model('Customer'),
    _ = require('lodash');
/**
 * Find Customer by id
 */
exports.customer = function(req, res, next, id) {
	console.log(req.user.tenant);
	Customer =mongoose.mtModel(req.user.tenant+'.Customer');
    Customer.load(id, function(err, customer) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load customer ' + id));
        req.customer = customer;
        next();
    });
};

/**
 * Create a Customer
 */
exports.create = function(req, res) {
	Customer =mongoose.mtModel(req.user.tenant+'.Customer');
    var bp = new Customer(req.body);
    bp.user = req.user;

    bp.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                bp: bp
            });
        } else {
            res.jsonp(bp);
        }
    });
};
/**
 * Update a Customer
 */
exports.update = function(req, res) {
    var customer = req.customer;

    customer = _.extend(customer, req.body);

    customer.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                customer: customer
            });
        } else {
            res.jsonp(customer);
        }
    });
};
exports.show = function(req, res) {
    res.jsonp(req.bp);
};

exports.all = function(req, res) {
	Customer =mongoose.mtModel(req.user.tenant+'.Customer');
    Customer.find().sort('-created').exec(function(err, bps) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });
};