/**
 * Created by swapnil on 20-Sep-14.
 */


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Customer = mongoose.model('Customer'),
    qs=require('qs'),
    _ = require('lodash');

exports.getInvDet = function(req, res) {
    //check for search query string
    //and parse the query string to json to use further
    var searchQuery=qs.parse(req.query);
    console.log(searchQuery);
    Customer = mongoose.mtModel(req.user.tenant+'.Customer');
    Customer.find(searchQuery)
        .select('name _id contact address').exec(function(err, bps) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(bps);
            }
        });
};

