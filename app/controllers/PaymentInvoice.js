/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 20/10/14
 * Time: 15:47
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),

//    Order = mongoose.model('Payment'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Get Payments by Customer
 */
exports.openPaymentsByCustomer = function(req, res, next) {
    //var searchCondition = qs.parse(req.query);
    console.log(req.params);
    var searchCondition =
    {	FromAccount:req.params.CustomerId,
        BalanceAmount: { '$gt': 0 } ,
        PaymentStatus :'Confirmed'

    };

   // { FromAccount:req.params.CustomerId,EndDate:"",BalanceAmount: { $gt: 0 } ,PaymentStatus :"Confirmed"};


//    console.log(searchCondition);
  //  console.log(req.user.tenant);
    Payment = mongoose.mtModel(req.user.tenant+'.Payment');
    Payment.find(searchCondition).exec(function(err, payments) {
        if (err){
            return  res.render('error');
        }
        else{
            res.json(payments);
        }
    });

};
