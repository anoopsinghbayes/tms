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
        type: Date,
        Default: Date.now
    }
    ,
    PaymentMode: {
        type: String

    }
});

mongoose.model('Payment', PaymentSchema);