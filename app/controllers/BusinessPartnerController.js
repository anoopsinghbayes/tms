var mongoose = require('mongoose'),
    //BusinessPartner = mongoose.model('BusinessPartner'),
    qs=require('qs'),
    _ = require('lodash');

/**
 * Create a BP
 */

exports.create = function(req, res) {
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

exports.all = function(req, res) {
    var bpModel = getModel(businessPartnerType, req.user.tenant);
    bpModel.findOne({_id: req.params.bpId}).exec(function(err, bp) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bp);
        }
    });
};


exports.show = function(req, res) {
    var businessPartnerType = req.params.businessPartnerType;
    var bpModel =getModel(businessPartnerType, req.user.tenant);
    bpModel.find().exec(function(err, bp) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bp);
        }
    });
};

var getModel = function(modelname,tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}