/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 23/08/14
 * Time: 17:31
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
 * Invoice Schema
 */
var InvoiceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    invoiceOrders:  [{OrderId:{type: mongoose.Schema.Types.ObjectId,ref:'Order'}}],

    totalAmount : Number



});

mongoose.mtModel('Invoice', InvoiceSchema);