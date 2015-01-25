/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 07/12/14
 * Time: 01:30
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
//BusinessPartner = mongoose.model('BusinessPartner'),
    qs=require('qs'),
    _ = require('lodash');

var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}


/**
 * Create a BP
 */

exports.create = function(req, res) {

    var addressModel =getModel('Address', req.user.tenant);
    var addr = new addressModel(req.body);
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









