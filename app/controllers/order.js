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
    //console.log(Order);
    var order = new Order(req.body);
    console.log(req.body.customer);
    order.customer=undefined;
        order.customer=req.body.customer._id;
    console.log(order);

    order.save(function(err) {
        console.log(err)
        if (err) {
            return res.send('500', {
                errors: err.errors
            });
        } else {
            res.jsonp(order);
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
    Order.find().select({no : 1, date : 1, status: 1,customer:1}).exec(function(err, orders) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(orders);
        }
    });
};