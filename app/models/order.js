/**
 * Created by anoop on 8/6/14.
 * //this is to allow reference type under multi tenancy using mongoose multi tenant plugin
 //which needs
 *//*



'use strict';

*/
/**
 * Module dependencies.
 *//*

var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema;
    //enums=require('./app/models/enums'),
require('mongoose-multitenant')('_');
var util = require('util');
var OrderStatus=["open","confirmed","closed","cancelled"];


*/
/**
 * Trip Details
 *//*



var SalesTripSchema = new Schema({

        pickUpLocation:{
        type:String

        },
        dropOffLocation:{
        type:String

        },
        pickUpDate:{
        type:Date

        },
        dropOffDate:{
        type:Date

        },
        distance:{
        type:Number

        },
        vehicleNo:{
        type:String

        },
        capacity:{
        type:Number

        },
        dieselUsed:{
        type:String

        },
        product:{
        type:String

        },
        pickUpWeight :{
            tyreWeight:{
                        type:Number
                        },
            netWeight:{
                type:Number

                      },
            grossWeight:{
                type:Number

            }
        },
        dropOffWeight:{
            tyreWeight:{
                type:Number
            },
            netWeight:{
                type:Number

            },
            grossWeight:{
                type:Number

            }
        }
    }
);

var SubcontractTripSchema = new Schema({

        pickUpLocation:{
            type:String

        },
        dropOffLocation:{
            type:String

        },
        pickUpDate:{
            type:Date

        },
        dropOffDate:{
            type:Date

        },
        distance:{
            type:Number

        },
        vehicleNo:{
            type:String

        },
        capacity:{
            type:Number

        },
        dieselUsed:{
            type:String

        },
        product:{
            type:String

        },
        pickUpWeight :{
            tyreWeight:{
                type:Number
            },
            netWeight:{
                type:Number

            },
            grossWeight:{
                type:Number

            }
        },
        dropOffWeight:{
            tyreWeight:{
                type:Number
            },
            netWeight:{
                type:Number

            },
            grossWeight:{
                type:Number

            }
        }
    }
);

var ServiceTripSchema = new Schema({
        emiStartDate:{
            type:Date

        },
        emiEndDate:{
            type:Date

        },
        vehicleNo:{
            type:String

        },
        daysPerMonth:{
            type:Date,
            trim:true
        },
        amount:{
            type:Number,
            trim:true
        },
        invoiceId:{
            type:mongoose.Schema.Types.ObjectId,        //refer to Invoice collection
            trim:true
        }
    }
);


function AbstractOrdersSchema() {
    Schema.apply(this, arguments);
    this.add({
        created: {
            type: Date,
            default: Date.now
        },
        orderStatus:{
            type:String,
            enum:OrderStatus
        },
        bpId:{
            type:Schema.ObjectId,
            ref:'BusinessPartner',
            $tenant:true
        },
        orderStartDate: {
            type:Date,
            trim:true
        },
        orderEndDate: {
            type:Date,
            trim:true
        }
    })
};

util.inherits(AbstractOrdersSchema, Schema);
var OrdersSchema = new AbstractOrdersSchema({});



var ServiceOrderSchema = new AbstractOrdersSchema({

    created: {
        type: Date,
        default: Date.now
    },
    serviceCharges: {
        type:Number,
        trim:true
    },

    totalDays: {
        type:Number,
        trim:true
    },
    emiDetails: {
        type: [ServiceTripSchema]
    }
});



var SalesOrderSchema = new AbstractOrdersSchema({
    tripDetails: {
        type: [SalesTripSchema]
    }
});


var SubcontractOrderSchema = new AbstractOrdersSchema({
    tripDetails: {
        type: [SubcontractTripSchema]
    }
});






var Order = mongoose.mtModel('Order', OrdersSchema); // our base model
var SalesOrder = Order.discriminator('SalesOrder', SalesOrderSchema); // our derived model (see discriminator)
var SubcontractOrder = Order.discriminator('SubcontractOrder', SubcontractOrderSchema); // our derived model (see discriminator)
var ServiceOrder = Order.discriminator('ServiceOrder', ServiceOrderSchema); // our derived model (see discriminator)



mongoose.mtModel('Order', OrdersSchema);
//OrderSchema.plugin(autoIncrement.plugin, 'Order');
*/
