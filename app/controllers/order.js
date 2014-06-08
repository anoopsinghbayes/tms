/**
 * Created by anoop on 8/6/14.
 */


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Order = mongoose.model('Order'),
    _ = require('lodash');
/**
 * Find Order by id
 */
exports.show = function(req, res, next) {
    console.log(req.params.OrderId);
    Order = mongoose.mtModel(req.user.tenant+'.Order');
    Order.load(req.params.OrderId, function(err, order) {
        if (err) return next(err);
        if (!order) return next(new Error('Failed to load customer ' + id));
        req.order = order;
        next();
    });
};

/**
 * Create a Customer
 */
exports.create = function(req, res) {
    Order =mongoose.mtModel(req.user.tenant+'.Order');
    var order = new Order(req.body);


    order.save(function(err) {
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
 * Update a order
 */
exports.update = function(req, res) {
    var order = req.customer;

    order = _.extend(order, req.body);

    order.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                order: order
            });
        } else {
            res.jsonp(order);
        }
    });
};
/*exports.show = function(req, res) {
 res.jsonp(req.bp);
 };*/

exports.all = function(req, res) {
    Order =mongoose.mtModel(req.user.tenant+'.Order');
    Order.find().sort('-created').exec(function(err, orders) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });
};