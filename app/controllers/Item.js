/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 29/11/14
 * Time: 18:47
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

    var itemCategory =req.params.itemCategory;
    console.log("tentant",req.user.tenant);
    var itemModel =getModel(itemCategory,req.user.tenant);
    var vm= new itemModel(req.body);
    console.log("vehicle",req.body);
    vm.user = req.user;

    vm.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err,
                vm: vm
            });
        } else {
            res.jsonp(vm);
        }
    });
};

/**
 * Update a Item
 */
exports.update = function(req, res) {
    var itemCategory = req.params.itemCategory;
    var itemModel = getModel(itemCategory, req.user.tenant);
    var item = new itemModel(req.body);
    var query = {"_id": req.params.itemId};
    var update = req.body;
    var options = {new: true};
    itemModel.findOneAndUpdate(query, update, options, function(err, item){
        if (err) {
            return res.send('500', {
                errors: err
            });
        }  else {
            res.jsonp(item);
        }
    });
};


exports.show = function(req, res, next) {
    var itemCategory =req.params.itemCategory;
    console.log("tenant",req.user.tenant);
    var itemModel =getModel(itemCategory,req.user.tenant);
    itemModel.find({}).exec(function(err, items) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(items);
        }
    });
};





var getModel = function(modelname,tenant){

    return  mongoose.mtModel(tenant +'.'+ modelname);

}