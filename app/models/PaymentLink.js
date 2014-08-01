/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 29/07/14
 * Time: 17:54
 * To change this template use File | Settings | File Templates.
 */


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
var PaymentLinkSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    PaymentID: {
        type: String

    },
    TransactionID: {
        type: String,
        trim: true
    },
    TransactionType: {
        type: String,
        trim: true
    },
    AllocatedAmount: {
        type: String,
        trim: true
    }
});

