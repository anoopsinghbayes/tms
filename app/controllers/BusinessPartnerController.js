var mongoose = require('mongoose'),
//BusinessPartner = mongoose.model('BusinessPartner'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create a BP
 */

exports.create = function(req, res) {
    console.log("inside BP create");
    var businessPartnerType = req.params.businessPartnerType;
    var bpModel =getModel(businessPartnerType, req.user.tenant);
    var bp = new bpModel(req.body);
    bp.user = req.user;
    bp.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err
                //bp: bp
            });
        } else {
            res.jsonp(bp);
        }
    });
};

exports.show = function(req, res) {
    var businessPartnerType = req.params.businessPartnerType;
    var bpId = req.params.bpId;
    var bpModel = getModel(businessPartnerType, req.user.tenant);
    if (bpId){
        bpModel.findOne({_id: bpId}).exec(function(err, bp) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(bp);
            }
        });
    }
    else{
        bpModel.find().exec(function(err, bp) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(bp);
            }
        });
    }

};

/**
 * Update a BP
 */
exports.update = function(req, res) {
    var businessPartnerType = req.params.businessPartnerType;
    var bpModel =getModel(businessPartnerType, req.user.tenant);
    var bpId = req.params.bpId;
    bpModel.findOne({_id: req.params.bpId}).exec(function(err, bp){
        bp =_.extend(bp, req.body);
        bp.save(function(err) {
            if (err) {
                return res.send('users/signup', {
                    errors: err.errors,
                    bp: bp
                });
            } else {
                res.jsonp(bp);
            }
        });
    });
};

var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}