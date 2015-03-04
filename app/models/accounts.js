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
        FromAccount: {
            type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
            trim: true

        },
        ToAccount: {
            type: mongoose.Schema.Types.ObjectId,  //model reference not given, since multiple models in BusinessPartner collection
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

        BalanceAmount: {

            type : Number

        },
        EndDate :{

            type: Date
        },

        Invoices : [
            {
                InvoiceNo:{
                    type: Schema.Types.ObjectId  //Rererence not given since multiple models are saved in Invoice collection

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