'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Payment Schema
 */
var PaymentSchema = new Schema({
    created: {
        type: String,
        default: Date.now
    },
    PaymentDate: {
        type: Date,
        required:true,
        default: Date.now
    },
    PaymentFrom: {
        type: String,
        required:true,
        trim: true
    },
    PaymentTo: {
        type: String,
        required:true,
        trim: true
    },
    PaymentRelDate: {
        type: Date,
        Default: Date.now
    }
    ,
    PaymentMode: {
        type: String,

    }
});

mongoose.model('Payment', PaymentSchema);