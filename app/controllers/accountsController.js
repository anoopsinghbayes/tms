/**
 * Created by swapnil on 17-Jan-15.
 */
var mongoose = require('mongoose'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create a Accounts
 */
exports.create = function(req, res) {
    var accountType = req.params.accountType;
    var accModel = getModel(accountType, req.user.tenant);
    var acc = new accModel(req.body);
    acc.user = req.user;
    acc.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err
            });
        } else {
            res.jsonp(acc);
        }
    });
};

/**
 * Show a Accounts
 */
exports.show = function(req, res) {
    var accountType = req.params.accountType;
    var accId = req.params.accId;
    var accModel = getModel(accountType, req.user.tenant);
    if (accId){
        accModel.findOne({_id: accId}).exec(function(err, acc) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(acc);
            }
        });
    }
    else{
        accModel.find({}).select('status').exec(function(err, acc) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                console.log(acc);
                res.jsonp(acc);
            }
        });
    }
};

exports.showConfirmedPayments = function(req, res){
    var accountType = req.params.accountType;
    var customerID = req.params.bpId;

    var accModel = getModel(accountType, req.user.tenant);

    accModel.find({$and:[{'payerId': customerID},{'status': 'confirmed'}]}).where('balanceAmount').gt(0).exec(function(err, paym) {
        if (err) {
            req.jsonp(err);
        } else {
            req.jsonp(paym);
        }
    });
};

/**
 * Update a Account
 */
exports.update = function(req, res) {
    var accountType = req.params.accountType;
    var accModel = getModel(accountType, req.user.tenant);
    var query = {"_id": req.params.accId};
    var update = req.body;
    var options = {new: true};
    bpModel.findOneAndUpdate(query, update, options, function(err, acc){
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                acc: acc
            });
        } else {
            res.jsonp(acc);
        }
    });
};

var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}