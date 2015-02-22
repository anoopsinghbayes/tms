/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 07/12/14
 * Time: 01:30
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose'),
    Address = mongoose.model('Address'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create a Address
 */

exports.create = function(req, res) {
    Address =mongoose.mtModel(req.user.tenant+'.Address');
    var addr = new Address(req.body);
    addr.user = req.user;
    addr.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err,
                addr: addr
            });
        } else {
            res.jsonp(addr);
        }
    });
};

exports.show = function(req, res) {
    Address =mongoose.mtModel(req.user.tenant+'.Address');
    var addId = req.params.addId;
    if (addId){
        Address.findOne({_id: addId}).exec(function(err, addr) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(addr);
            }
        });
    }
    else{
        Address.find().exec(function(err, addr) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(addr);
            }
        });
    }

};

/**
 * Update a Address
 */
exports.update = function(req, res) {
    Address = mongoose.mtModel(req.user.tenant+'.Address');
    Address.findOne({_id: req.params.addId}).exec(function(err, addr){
        addr =_.extend(addr, req.body);
        addr.save(function(err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    bp: addr
                });
            } else {
                res.jsonp(addr);
            }
        });
    });
};
