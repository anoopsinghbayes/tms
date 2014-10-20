/**
 * Created by swapnil on 19-Oct-14.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    BusinessPartner = mongoose.model('BusinessPartner'),
    Vendor = mongoose.model('Vendor'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create Vendor
 */
exports.create = function(req, res, next) {
    Vendor =mongoose.mtModel(req.user.tenant+'.Vendor');

    var bp = new Vendor(req.body);
    bp.user = req.user;

    bp.save(function(err) {
        if (err) {
            res.send('500', {
                errors: err.errors,
                bp: bp
            });
        } else {
            res.jsonp(bp);
        }
    });
};

/**
 * Update a Vendor
 */
exports.update = function(req, res) {
    Vendor =mongoose.mtModel(req.user.tenant+'.Vendor');

    Vendor.findOne({_id: req.params.VendorId},function(err,vendor){

        vendor=_.extend(vendor, req.body);

        vendor.save(function(err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    vendor: vendor
                });
            } else {
                res.jsonp(vendor);
            }
        });
    })
};

/**
 * Find Vendor by id
 */
exports.show = function(req, res, next) {
    Vendor = mongoose.mtModel(req.user.tenant+'.Vendor');
    Vendor.findOne({_id: req.params.VendorId}, function(err, vendor) {
        if (err){
            return next(err);
        }
        else{
            res.json(vendor);
        }

    });
};

/**
 * Find All Customer
 * */

exports.all = function(req, res) {
    //check for search query string
    //and parse the query string to json to use further
    var searchQuery = qs.parse(req.query);
    Vendor =mongoose.mtModel(req.user.tenant+'.Vendor');
    if (searchQuery.name) {
        //for like query on name
        var regex = new RegExp(searchQuery.name, 'i');
        Vendor.find({firstName: regex})
            .select('firstName _id addressDetails').exec(function(err, vendor) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(vendor);
                }
            });
    }
    else
    {
        Vendor.find().sort('-created').exec(function(err, vendor) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(vendor);
            }
        });
    }

};