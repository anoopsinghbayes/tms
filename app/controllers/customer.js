/**
 * Created by swapnil on 19-Oct-14.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    BusinessPartner = mongoose.model('BusinessPartner'),
    Customer = mongoose.model('Customer'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create a Customer
 */
exports.create = function(req, res, next) {
    Customer =mongoose.mtModel(req.user.tenant+'.Customer');

    var bp = new Customer(req.body);
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
 * Update a Customer
 */
exports.update = function(req, res) {
    Customer =mongoose.mtModel(req.user.tenant+'.Customer');

    Customer.findOne({_id: req.params.CustomerId},function(err,customer){

        customer=_.extend(customer, req.body);

        customer.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    customer: customer
                });
            } else {
                res.jsonp(customer);
            }
        });
    })
};

/**
 * Find Customer by id
 */
exports.show = function(req, res, next) {
    Customer = mongoose.mtModel(req.user.tenant+'.Customer');
    Customer.findOne({_id: req.params.CustomerId}, function(err, customer) {
        if (err){
            return next(err);
        }
        else{
            res.json(customer);
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
    Customer =mongoose.mtModel(req.user.tenant+'.Customer');
    if (searchQuery.name) {
        //for like query on name
        var regex = new RegExp(searchQuery.name, 'i');
        Customer.find({companyName: regex})
            .select('companyName _id addressDetails').exec(function(err, bps) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(bps);
                }
            });
    }
    else
    {
        Customer.find().sort('-created').exec(function(err, bps) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });
    }

};