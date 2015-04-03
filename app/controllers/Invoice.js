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
    Invoice = mongoose.model('Invoice'),
    _ = require('lodash');

/**
 * Create a Invoice
 */
exports.create = function (req, res) {
    var invType = req.params.invoiceType;
    var Invoice = getInvModel(invType, req.user.tenant);
    //Invoice = mongoose.mtModel(req.user.tenant + '.Invoice');
    //console.log(Order);
    var invoice = new Invoice(req.body);
    invoice.save(function (err) {
        console.log(err)
        if (err) {
            return res.send('500', {
                errors:err.errors
            });
        } else {
            res.jsonp(invoice);
        }
    });
};


/**
 * Update a Invoice
 */
exports.update = function (req, res) {
    Invoice = mongoose.mtModel(req.user.tenant + '.Invoice');

    Invoice.findOne({_id:req.params.invoiceId}, function (err, invoice) {

        invoice = _.extend(invoice, req.body);

        invoice.save(function (err) {
            if (err) {

                return res.send('users/signup', {
                    errors:err.errors,
                    invoice:invoice
                });
            } else {
                res.jsonp(invoice);
            }
        });
    })
};


exports.show = function(req, res) {
    var invType = req.params.invoiceType;

    var invModel = getInvModel(invType, req.user.tenant);

    invModel.find({$and:[{"bpId": req.params.bpId},{"status":'open'},{"dueAmount":{$gt:0}}]}).exec(function(err, inv) {
    if (err) {
        res.jsonp(err);
    } else {
        res.jsonp(inv);
    }
});

    //var accModel = getAccModel(invType, req.user.tenant);

    //accModel.find({$and:[{'payerId': customerID},{'status': 'confirmed'}]}).where('balanceAmount').gt(0).exec(function(err, paym) {
        //accModel.find({'payerId': customerID}).exec(function(err, paym) {
       /* if (err) {
            respArray.push(err);
        } else {
            console.log('payemnt query date',new Date());
            respArray.payments=paym;
        }
    });*/
};

var getInvModel = function(modelname, tenant) {
    return  mongoose.mtModel(tenant + '.' + modelname);
}

var getAccModel = function(modelname, tenant) {
    if (modelname == 'Purchase'){
        return  mongoose.mtModel(tenant + '.' + 'AccountsPayable');
    } else{
        return  mongoose.mtModel(tenant + '.' + 'AccountsReceivable');
    }

}