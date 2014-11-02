'use strict';
/**
* Created with JetBrains WebStorm.
* User: Padmaraj
* Date: 09/06/14
* Time: 22:29
* To change this template use File | Settings | File Templates.
*/




/**
* Module dependencies.
*/
var mongoose = require('mongoose'),
    Payment = mongoose.model('Payment'),
    _ = require('lodash');
var util = require('util');




/**
* Save Payment
*/
exports.create = function(req, res) {
    console.log(req);
    Payment =mongoose.mtModel(req.user.tenant+'.Payment');
    var payment = new Payment(req.body);
    payment.user = req.user;

    payment.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                payment: payment
            });
        } else {
            res.jsonp(payment);
        }
    });
};

