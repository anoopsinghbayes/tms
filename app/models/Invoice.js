/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 23/08/14
 * Time: 17:31
 * To change this template use File | Settings | File Templates.
 */


'use strict';

/*

                    Invoice Types
   1.General Invoice                -- It will not be used it will act as base Invoice
   2.Trip Invoice                   -- For trip orders Trip Invoice will be generated
   3.Rental Invoice                 -- For Rental and Subcontracted Orders
   4.Purchase Invoice               -- Por Purchase of any transpoter related : Vehicle,Vehicle Parts or Any general Item
   5.Sales Invoice                  -- Sales of any Item
   6.Service Invoice                -- For Salary,Rent,Electricity bill related orders .




*/


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

function AbstractInvoiceSchema() {
    Schema.apply(this, arguments);

    this.add({

        created: {
            type: Date,
            default: Date.now
        },
        invoiceDate:{
            type:Date
        },
        totalAmt:{
            type:Number
        },
        dueAmount:{
            type:Number
        },
        discountAmt:{
            type:Number
        },
        loadingAmt:{
            type: Number
        },

        remarks:{
            type:String
        },
        invoiceToBP:{

            type:mongoose.Schema.Types.ObjectId   //this will refer to BusinessPartner collection

        },
        invoiceType:{

        },
        serviceTaxAmt:{
            type: Number
        },
        vatAmt:{
          type:Number
        }
        /*,
        acType:{                //Account type (Income(I)/Expense(E))

            type:String,
            required:true
        }
*/


    });

};

util.inherits(AbstractInvoiceSchema, Schema);

var InvoiceSchema = new AbstractInvoiceSchema({});


var VoucherSchema = new AbstractInvoiceSchema({

});


var GeneralInvoiceSchema = new AbstractInvoiceSchema({

    acSubType: {                //to bifurgate Income and Expense further to cover expenses like Electricity bill,Telephone bill,Employee Salary
    type: String
    }


});


var SalesOrderInvoiceLinesSchema= new Schema({

        tripId:{
            type:mongoose.Schema.Types.ObjectId            //will come from Orders Collection Order type = Trip
            //ref:''
        },
        tripAmt:{
            type:Number

        },
        lrNo:{
          type:String
        },
        shortageAmt:{
            type:Number
        },
        vehicleNo:{
            type:String
        },
        pickUpDate:{
        type:Date
        },
        dropOffDate:{
        type:Date
        },
        product:{
            type:String
        }





});


var SalesOrderInvoiceSchema = new AbstractInvoiceSchema({

         OrderId:    {
            type: mongoose.Schema.Types.ObjectId

        },
        InvoiceLines:[SalesOrderInvoiceLinesSchema]

});






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