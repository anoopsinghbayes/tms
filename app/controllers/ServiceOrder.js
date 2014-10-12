/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 15/08/14
 * Time: 22:50
 * To change this template use File | Settings | File Templates.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    ServiceOrder = mongoose.model('ServiceOrder'),
    _ = require('lodash');





/**
 * Save Service Order
 */
exports.create = function(req, res) {
    console.log(req);
    ServiceOrder =mongoose.mtModel(req.user.tenant+'.ServiceOrder');
    var serviceOrder = new ServiceOrder(req.body);
    serviceOrder.user = req.user;

    serviceOrder.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                serviceOrder: serviceOrder
            });
        } else {
            res.jsonp(serviceOrder);
        }
    });
};

/**
 * Update a Service Order
 */
exports.update = function(req, res) {
    ServiceOrder =mongoose.mtModel(req.user.tenant+'.ServiceOrder');

    ServiceOrder.findOne({_id: req.params.serviceOrderId},function(err,serviceOrder){

        serviceOrder =_.extend(serviceOrder, req.body);

        serviceOrder.save(function(err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    serviceOrder: serviceOrder
                });
            } else {
                res.jsonp(serviceOrder);
            }
        });
    })
};

/**
 * Find Service Orders
 */
exports.show = function(req, res, next) {
    ServiceOrder =mongoose.mtModel(req.user.tenant+'.ServiceOrder');
    ServiceOrder.findOne({_id: req.params.serviceOrderId}, function(err, serviceorder) {
        if (err){
            return next(err);
        }
        else{
            res.json(serviceorder);
        }

    });
};

/*
 Find all Service Orders
 */
exports.all = function(req, res) {
    ServiceOrder =mongoose.mtModel(req.user.tenant+'.ServiceOrder');
    ServiceOrder.find().sort('-created').exec(function(err, serviceorder) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(serviceorder);
            }
        });
};

