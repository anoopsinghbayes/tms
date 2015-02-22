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
var util = require('util');






/**
 * Base Invoice Schema
 */
var InvoiceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },



    CustomerID :
    {
        type: mongoose.Schema.Types.ObjectId  //since multiple models in BusinessPartner collection reference not given for CustomerID


    },


    Orders:  [
        {       OrderId:    {
                                type: mongoose.Schema.Types.ObjectId,
                                ref:'Order'
                            },
                OrderAmount:{
                                type:Number
                            },

                Remarks:{
                                type:String
                        }

        }   ],

    InvoiceDate :
    {
            type:Date
    },
    TaxPercentage:
    {
            type: Number
    },
    DiscountAmount:
    {
        type : Number
    },
    LoadingAmount:
    {
        type:Number
    },
    TaxAmount:
    {
            type: Number
    },
    TotalAmount :
    {
            type :Number
    },
    Remarks:
    {
        type: String
    },
    DueAmount:
    {
        type: Number
    }



});

mongoose.mtModel('Invoice', InvoiceSchema);