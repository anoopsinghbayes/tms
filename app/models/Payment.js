'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');



/**
 * Payment Schema
 */
var PaymentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    PaymentDate: {
        type: Date

    },
    FromAccount: {
        type: String,
        trim: true
    },
    ToAccount: {
        type: String,
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
                type: Schema.Types.ObjectId,
                ref: 'Invoice'
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

mongoose.model('Payment', PaymentSchema);