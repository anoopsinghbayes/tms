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
    Order = mongoose.model('Order'),
    _ = require('lodash');












exports.create = function(req, res) {
    Invoice =mongoose.mtModel(req.user.tenant+'.Invoice');
    //console.log(Order);
    var invoice = new Invoice(req.body);
    order.save(function(err) {
        console.log(err)
        if (err) {
            return res.send('500', {
                errors: err.errors
            });
        } else {
            res.jsonp(invoice);
        }
    });
};
