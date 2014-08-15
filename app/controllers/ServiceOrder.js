/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 15/08/14
 * Time: 22:50
 * To change this template use File | Settings | File Templates.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    ServiceOrder = mongoose.model('ServiceOrder'),
    _ = require('lodash');





/**
 * Save Service Order
 */
exports.create = function(req, res) {
    console.log(req);
    ServiceOrder =mongoose.mtModel(req.user.tenant+'.ServiceOrder');
    var serviceOrder = new ServiceOrder(req.body);
    serviceOrder.user = req.user;

    serviceOrder.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                serviceOrder: serviceOrder
            });
        } else {
            res.jsonp(serviceOrder);
        }
    });
};


