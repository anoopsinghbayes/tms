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
    var invoiceType = req.params.invoiceType;
    var invoiceModel =getModel(invoiceType, req.user.tenant);
    var invoice = new invoiceModel(req.body);
    invoice.user = req.user;
    invoice.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err
                //bp: bp
            });
        } else {
            res.jsonp(invoice);
        }
    });
};

/*
get Invoice
 */
exports.show = function(req, res) {
    var invoiceType = req.params.invoiceType;
    var invoiceId = req.params.invoiceId;
    var invoiceModel = getModel(invoiceType, req.user.tenant);
    if (invoiceId){
        invoiceModel.findOne({_id: invoiceId}).exec(function(err, invoice) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(invoice);
            }
        });
    }
    else{
        invoiceModel.find().exec(function(err, invoice) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(invoice);
            }
        });
    }

};




/*

Update Invoice

 */
exports.update = function(req, res) {
    var invoiceType = req.params.invoiceType;
    var invoiceModel = getModel(invoiceType, req.user.tenant);
    var query = {"_id": req.params.invoiceId};
    var update = req.body;
    var options = {new: true};
    invoiceModel.findOneAndUpdate(query, update, options, function(err, invoice){
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                bp: invoice
            });
        } else {
            res.jsonp(invoice);
        }
    });
};

var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}