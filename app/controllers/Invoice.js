/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 23/08/14
 * Time: 19:46
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Invoice = mongoose.model('Invoice'),
    _ = require('lodash');

/**
 * Create a Invoice
 */
exports.create = function(req, res) {
    Invoice =mongoose.mtModel(req.user.tenant+'.Invoice');
    //console.log(Order);
    var invoice = new Invoice(req.body);
    order.save(function(err) {
        console.log(err)
        if (err) {
            return res.send('500', {
                errors: err.errors
            });
        } else {
            res.jsonp(invoice);
        }
    });
};


/**
 * Update a Invoice
 */
exports.update = function(req, res) {
    Invoice =mongoose.mtModel(req.user.tenant+'.Invoice');

    Invoice.findOne({_id: req.params.invoiceId},function(err,invoice){

        invoice =_.extend(invoice, req.body);

        invoice.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    invoice: invoice
                });
            } else {
                res.jsonp(invoice);
            }
        });
    })
};