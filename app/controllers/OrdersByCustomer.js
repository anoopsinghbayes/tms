/**
 * Created by swapnil on 20-Sep-14.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Order = mongoose.model('Order'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Find Order by Customer
 */
exports.show = function(req, res, next) {
    console.log('tenantid:',req.user.tenant);
    var searchCondition = qs.parse(req.query);
    Order = mongoose.mtModel(req.user.tenant+'.Order');
    Order.find({customer:searchCondition}).select('').exec(function(err, order) {
        console.log('error:',err);
        console.log('customer:',customer);
        if (err){
            return  res.render('error');
        }
        else{
            res.json(order);
        }

    });
};