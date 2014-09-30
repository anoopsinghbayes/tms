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
exports.ordersByCustomer = function(req, res, next) {
    var searchCondition = qs.parse(req.query);
    //var searchCondition = req.query;
    console.log(searchCondition);
    //console.log(id);
    Order = mongoose.mtModel(req.user.tenant+'.Order');
    Order.find(searchCondition).populate('_id customer status').exec(function(err, order) {
        if (err){
            return  res.render('error');
        }
        else{
            res.json(order);
        }
    });
};

exports.ordersDetails = function(req, res, next) {
    var orderList = req.param('_id').split(',')

    //validate and enlist only valid ids to be sent to the query
    orderList= _.filter(orderList,function(id){return mongoose.Types.ObjectId.isValid(id)});
    Order = mongoose.mtModel(req.user.tenant+'.Order');
        Order.find({'_id': {$in:orderList}}).select('_id customer status').exec(function (err, order) {
            if (err) {
                console.log(err)
                return  res.render('error');
            }
            else {
                res.json(order);
            }
        });
};