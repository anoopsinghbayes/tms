/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 23/08/14
 * Time: 17:31
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');


'use strict';

/*

                    Invoice Types
   1.Abstract/General Invoice       -- It will not be used it will act as base Invoice
   2.Trip Invoice                   -- For trip orders Trip Invoice will be generated
   3.Rental Invoice                 -- For Rental and Subcontracted Orders
   4.Purchase Invoice               -- Por Purchase of any transpoter related : Vehicle,Vehicle Parts or Any general Item
   5.Sales Invoice                  -- Sales of any Item
   6.Service Invoice                -- For Salary,Rent,Electricity bill related orders .




*/

var InvoiceStatusEnum = ['open','closed'];



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
    bpId :
    {
        type: mongoose.Schema.Types.ObjectId  //since multiple models in BusinessPartner collection reference not given for CustomerID


    },
    invoiceDate :
    {
        type:Date
    },
    status:{

        type:String,
        enum:InvoiceStatusEnum
    },

    taxPercentage:
    {
        type: Number
    },
    discountAmount:
    {
        type : Number
    },
    loadingAmount:
    {
        type:Number
    },
    vatAmt:{
        type:Number
    },
    serviceTaxAmt:
    {
        type: Number
    },
    totalAmount :               ///==orderAmt+totalTax
    {
        type :Number
    },
    remarks:
    {
        type: String
    },
    dueAmount:
    {
        type: Number
    }


});


}




util.inherits(AbstractInvoiceSchema, Schema);

var InvoiceSchema = new AbstractInvoiceSchema({});


 var TripOrderInvoiceLinesSchema= new Schema({

        orderId:    {
             type: mongoose.Schema.Types.ObjectId  // Will come from Orders Collection

         },
        orderAmt:{
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
            type:String         //will come from Item Master
        },
        remarks:{

         type:String
        }





    });


 var TripOrderInvoiceSchema = new AbstractInvoiceSchema({

        invoiceLines:[TripOrderInvoiceLinesSchema]

    });



var RentalOrderInvoiceSchema = new AbstractInvoiceSchema({


    invoiceLines:[TripOrderInvoiceLinesSchema]

});




var GenericOrderInvoiceLinesSchema= new Schema({

    orderId:    {
        type: mongoose.Schema.Types.ObjectId  // Will come from Orders Collection

    },
    orderAmt:{
        type:Number

    },
    remarks:{

        type:String
    }

});





var PurchaseOrderInvoiceSchema = new AbstractInvoiceSchema({


    invoiceLines:[GenericOrderInvoiceLinesSchema]

});



var ServiceOrderInvoiceSchema = new AbstractInvoiceSchema({


    invoiceLines:[GenericOrderInvoiceLinesSchema]

});




var SalesOrderInvoiceSchema = new AbstractInvoiceSchema({


    invoiceLines:[GenericOrderInvoiceLinesSchema]

});


var Invoice = mongoose.mtModel('Invoice', InvoiceSchema); // our base model
var TripInvoice = Invoice.discriminator('Trip', TripOrderInvoiceSchema);
var RentalInvoice = Invoice.discriminator('Rental', RentalOrderInvoiceSchema);
var PurchaseInvoice = Invoice.discriminator('Purchase', PurchaseOrderInvoiceSchema);
var ServiceInvoice = Invoice.discriminator('Service', ServiceOrderInvoiceSchema);
var SalesInvoice = Invoice.discriminator('Sales', SalesOrderInvoiceSchema);
