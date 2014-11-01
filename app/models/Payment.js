'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');


/**
 * Payment Schema
 */
function AbstractPaymentSchema() {
    Schema.apply(this, arguments);

    this.add({


    created: {
        type: Date,
        default: Date.now
    },
    PaymentDate: {
        type: Date

    },
    FromAccount: {
        type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
        trim: true

    },
    ToAccount: {
        type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
        trim: true
    },
    PaymentRelDate: {
        type: Date                  //Payment Confirmation Date
    },
    BankDetails :{
                    BankName        : {type: String,trim: true},
                    BranchName      : {type: String,trim: true},
                    BranchAddress   : {type: String,trim: true},
                    IFSCCode        : {type: String,trim: true},
                    BranchCode      : {type: String,trim: true}

    },
    PaymentStatus:
    {
        type: String,               //Pending,Confirmed,Cancelled
        trim: true
    },

    PaymentMode: {
        type: String                //Cash, Cheque, DD

    },
    PaymentAmount:
    {
        type:Number
    },

    BalanceAmount: {

        type : Number

    },
    EndDate :{

        type: Date
    },

    Invoices : [
        {
            InvoiceNo:{
                type: Schema.Types.ObjectId  //Rererence not given since multiple models are saved in Invoice collection

            },
            Amount:
            {
                type: Number
            },
            ModifiedDate:
            {
                type: Date
            }


        }
    ]

        });

};




util.inherits(AbstractPaymentSchema, Schema);

var PaymentSchema = new AbstractPaymentSchema({});


var IncomeSchema = new AbstractPaymentSchema({

});

var ExpenseSchema = new AbstractPaymentSchema({

});



var Payment = mongoose.mtModel('Payment', PaymentSchema); // base model
var Income = Payment.discriminator('Income', IncomeSchema); // derived model
var Expense = Payment.discriminator('Expense', ExpenseSchema); // derived model