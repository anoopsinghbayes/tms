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

var autoIncrement = require('mongoose-auto-increment');

var accountsStatusEnum=["pending","confirmed","cancelled"];
var paymentModeEnum = ["cash","cheque","dd"]


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
        paymentEntryDate: {
            type: Date

        },
        payerId: {
            type: String,  //model reference not given, since multiple models in BusinessPartner collection
            trim: true

        },
        payeeId: {
            type: String,  //model reference not given, since multiple models in BusinessPartner collection
            trim: true
        },
        paymentRelDate: {
            type: Date                  //Payment Confirmation Date
        },
        BankDetails :{
            BankName        : {type: String,trim: true},
            BranchName      : {type: String,trim: true},
            BranchAddress   : {type: String,trim: true},
            IFSCCode        : {type: String,trim: true},
            BranchCode      : {type: String,trim: true}

        },
        status:
        {
            type: String,               //Pending,Confirmed,Cancelled
            enum:accountsStatusEnum,
            trim: true
        },

        paymentMode: {
            type: String,                //Cash, Cheque, DD
            enum:paymentModeEnum

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

        Invoices : [
            {
                invoiceId:{
                    type: String  //Rererence not given since multiple models are saved in Invoice collection

                },
                amount:
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

AccountsReceivableSchema.plugin(autoIncrement.plugin, 'AccountsReceivable');
var AccountsReceivable = Accounts.discriminator('AccountsReceivable', AccountsReceivableSchema); // derived model

AccountsPayableSchema.plugin(autoIncrement.plugin, 'AccountsPayable');
var AccountsPayable = Accounts.discriminator('AccountsPayable', AccountsPayableSchema); // derived model