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

/**
 * Find Tyre Details
 */
exports.show = function(req, res, next) {
    Tyre =mongoose.mtModel(req.user.tenant+'.Tyre');
    Tyre.findOne({_id: req.params.tyreId}, function(err, tyre) {
        if (err){
            return next(err);
        }
        else{
            res.json(tyre);
        }

    });
};

/*
 Find all Tyre Details
 */
exports.all = function(req, res) {
    //check for search query string
    //and parse the query string to json to use further
    var searchQuery=qs.parse(req.query);
    Tyre =mongoose.mtModel(req.user.tenant+'.Tyre');
    if (searchQuery.tyreNumber) {
        //for like query on name
        var regex = new RegExp(searchQuery.tyreNumber, 'i');
        Tyre.find({tyreNumber: regex})
            .select('tyreNumber tyreType tyreSize make vehicleNumber').exec(function(err, tyre) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(tyre);
                }
            });
    }
    else
    {
        Tyre.find().sort('-created').exec(function(err, tyre) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(tyre);
            }
        });
    }

};