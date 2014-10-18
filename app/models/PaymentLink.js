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
    TagDate:{
        type: Date

    },
    PaymentID:  {   type: Schema.Types.ObjectId,
        ref: 'Payment'
    },

    tagDetails: {
        payments : [
                    {
                    PaymentID:  {   type: Schema.Types.ObjectId,
                                    ref: 'Payment'
                                },
                    TagAmount:
                                {
                                    type: Number

                                },
                    BalanceAmount:
                                {
                                    type: Number
                                }
                    }
                    ],
        invoices : [
                    {
                    InvoiceNo:{
                                    type: Schema.Types.ObjectId,
                                    ref: 'Invoice'
                                },
                    InvoiceDate:
                                {
                                    type: Date
                                },
                    InvoiceAmount:
                                {
                                    type: Number
                                }
            }
                    ]

    }

});

mongoose.mtModel('PaymentLink', PaymentLinkSchema);
