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
/*
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
*/



exports.show = function(req, res) {
    var orderType = req.params.orderType;
    var orderId = req.params.orderId;
    var orderModel = getModel(orderType, req.user.tenant);
    if (orderId){
        orderModel.findOne({_id: orderId}).populate('bpId').exec(function(err, order) {
            if (err) {
                res.jsonp(err);
            } else {
                res.jsonp(order);
            }
        });
    }
    else{
        orderModel.find().exec(function(err, order) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(order);
            }
        });
    }

};









/**
 * Create a Customer
 */
/*
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
*/


exports.create = function(req, res) {
    console.log(req);
    var orderType = req.params.orderType;
    var orderModel = getModel(orderType, req.user.tenant);
    //Order =mongoose.mtModel(req.user.tenant+'.Order');
    var Order = new orderModel(req.body);
    Order.user = req.user;

    Order.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err
                //Order: Order
            });
        } else {
            res.jsonp(Order);
        }
    });
};






/**
 * Update a order
 */
exports.update = function(req, res) {
    var orderType = req.params.orderType;
    var orderModel = getModel(orderType, req.user.tenant);
    var query = {"_id": req.params.orderId};
    var update = req.body;
    //var options = {new: true};
    orderModel.findOneAndUpdate(query, update, function(err, order){
        if (err) {
            return res.send('500', {
                errors: err
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

var getModel = function(modelname, tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}
