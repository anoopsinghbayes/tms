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
    PaymentFrom: {
        type: String,
        trim: true
    },
    PaymentTo: {
        type: String,
        trim: true
    },
    PaymentRelDate: {
        type: Date
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
        type: String,
        trim: true
    },
    PaymentMode: {
        type: String

    },
    PaymentAmount:
    {
        type:Number
    },

    BalanceAmount: {

        type : Number

    }

});

mongoose.model('Payment', PaymentSchema);