/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 02/11/14
 * Time: 01:02
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
 * Accounts Schema
 */
function AbstractAccountsSchema() {
    Schema.apply(this, arguments);

    this.add({


        created: {
            type: Date,
            default: Date.now
        },
        paymentDate: {
            type: Date

        },
        fromAccount: {
            type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
            trim: true

        },
        toAccount: {
            type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
            trim: true
        },
        paymentRelDate: {
            type: Date                  //Payment Confirmation Date
        },
        bankDetails :{
            bankName        : {type: String,trim: true},
            branchName      : {type: String,trim: true},
            branchAddress   : {type: String,trim: true},
            ifscCode        : {type: String,trim: true},
            branchCode      : {type: String,trim: true}

        },
        paymentStatus:
        {
            type: String,               //Pending,Confirmed,Cancelled
            trim: true
        },

        paymentMode: {
            type: String                //Cash, Cheque, DD

        },
        paymentAmount:
        {
            type:Number
        },

        balanceAmount: {

            type : Number

        },
        endDate :{

            type: Date
        },

        invoices : [
            {
                invoiceId:{
                    type: Schema.Types.ObjectId  //Rererence not given since multiple models are saved in Invoice collection

                },
                amount:                            //this amount linked to particular payment it may not match to total invoice amount
                {
                    type: Number
                },
                modifiedDate:
                {
                    type: Date
                }


            }
        ]

    });

};




util.inherits(AbstractAccountsSchema, Schema);

var AccountsSchema = new AbstractAccountsSchema({});


var AccountsReceivableSchema = new AbstractAccountsSchema({

});

var AccountsPayableSchema = new AbstractAccountsSchema({

});



var Accounts = mongoose.mtModel('Accounts', AccountsSchema); // base model
var AccountsReceivable = Accounts.discriminator('AccountsReceivable', AccountsReceivableSchema); // derived model
var AccountsPayable = Accounts.discriminator('AccountsPayable', AccountsPayableSchema); // derived model