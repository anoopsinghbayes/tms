/**
 * Created by swapnil on 16-Aug-14.
 */

var mongoose = require('mongoose'),
    Tyre = mongoose.model('Tyre'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Create a Vehicle
 */

exports.create = function(req, res) {
    Tyre = mongoose.mtModel(req.user.tenant+'.Tyre');
    var vm= new Tyre(req.body);
    vm.user = req.user;

    vm.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                vm: vm
            });
        } else {
            res.jsonp(vm);
        }
    });
};

/**
 * Update a Tyre Details
 */
exports.update = function(req, res) {
    Tyre =mongoose.mtModel(req.user.tenant+'.Tyre');

    Tyre.findOne({_id: req.params.tyreId},function(err, tyre){

        tyre =_.extend(tyre, req.body);

        tyre.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    tyre: tyre
                });
            } else {
                res.jsonp(tyre);
            }
        });
    })
};