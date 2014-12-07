/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 07/12/14
 * Time: 00:44
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    Vehicle = mongoose.model('Vehicle'),
    qs=require('qs'),
    _ = require('lodash');


/**
 * Create a item
 */

exports.create = function(req, res) {

    var orderType =req.params.orderType;
    console.log("tentant",req.user.tenant);
    var orderModel =getModel(orderType,req.user.tenant);
    var om= new orderModel(req.body);
    console.log("Order",req.body);
    om.user = req.user;

    om.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err,
                om: om
            });
        } else {
            res.jsonp(om);
        }
    });
};






var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}