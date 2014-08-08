/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 29/07/14
 * Time: 17:53
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Payment = mongoose.model('PaymentLink'),
    _ = require('lodash');





/**
 * Save Payment
 */
exports.create = function(req, res) {
    console.log(req);
    PaymentLink =mongoose.mtModel(req.user.tenant+'.PaymentLink');
    var paymentlink = new PaymentLink(req.body);
    paymentlink.user = req.user;

    paymentlink.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                paymentlink: paymentlink
            });
        } else {
            res.jsonp(paymentlink);
        }
    });
};

