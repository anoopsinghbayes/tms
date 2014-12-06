/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 30/11/14
 * Time: 12:19
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema;
//enums=require('./app/models/enums'),
require('mongoose-multitenant')('_');
var util = require('util');
var OrderStatus=["open","confirmed","closed","cancelled"];


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
        itemId:{
            type:Schema.ObjectId,
            ref:'Item',
            $tenant:true
        },
        bpId:{
            type:Schema.ObjectId,
            ref:'BusinessPartner',
            $tenant:true
        },
        bpAddress:{
            type:Schema.ObjectId,
            ref:'Address',
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


/*

Trip will have validations like
minimum and maximum one Utlimate Pickup and Ultimate Dropoff .

 locationType will be Enum  -->
  1.Utlimate Pickup 2.Intermediate Pickup 3.Intermediate Dropoff 4.Ultimate Dropoff 5. Dead Weight

 */


var TripSchema = new Schema({

        locationType:{
            type:String
        },
        address:{
         type:String
        },
        challanNo:{
            type:String
        },
        challanDate:{
            type:Date
        },
        distanceLastLocation:{
            type:Number

        },
        capacity:{
            type:Number

        },
        product:{
            type:Schema.ObjectId,
            ref:'Item',
            $tenant:true

        },
        cargoWeight :{
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

var TripOrderFinance=new Schema({

    itemCategory:{
        type:String             // will come from Item master
    },
    itemTitle:{
        type:String                //will come from Item master
    },
    itemId:{
        type:Schema.ObjectId,       //Item which is added from item master based on itemCategory and item title
        ref:'Item',
        $tenant:true
    },
    description:{
        type:String             //description will be same attribute of item master
    },
    perDayCharge:{
      type:Number               //e.g. driver per day expense,vehicle per day charge
    },
    totalDays:{
        type:Number
    },
    actualCost:{
        type:Number
    },
    salesCost:{
        type:String
    },
    chargeable:{
        type:Boolean                   //Chargeable =true if add to customer invoice else keep it as internal expense
    }

});

util.inherits(AbstractOrdersSchema, Schema);
var OrdersSchema = new AbstractOrdersSchema({});

/*

 orderType will be Boolean -->
 Subcontracted =true For trip subcontracted to other transporter.
 By Default It will be set to false in UI

 SubcontractorId will be mandatory if isSubcontracted is true

 */

var TripOrderSchema = new AbstractOrdersSchema({

    vehicleNo:{
        type:Schema.ObjectId,
        ref:'Item',
        $tenant:true
    },
    isSubContracted:{
      type:Boolean
    },
    subcontractorId:{
        type:Schema.ObjectId,
        ref:'BusinessPartner',
        $tenant:true
    },
    tripDetails: {
        type: [TripSchema]
    },
    finance:{
        type:[TripOrderFinance]
    }

});



/*


  */



var RentalOrderSchema = new AbstractOrdersSchema({

    vehicleNo:{
        type:Schema.ObjectId,
        ref:'Item',
        $tenant:true
    },
    finance:{
        type:[TripOrderFinance]
    }
});



/*
In purchase order
 Chargeable =true by default and need not to show in UI because all lines will be chargeable
 */



var PurchaseOrderFinance=new Schema({

    itemCategory:{
        type:String             // will come from Item master
    },
    itemTitle:{
        type:String                //will come from Item master
    },
    itemId:{
        type:Schema.ObjectId,       //Item which is added from item master based on itemCategory and item title
        ref:'Item',
        $tenant:true
    },
    description:{
        type:String             //description will be same attribute of item master
    },
    actualCost:{
        type:Number
    },
    salesCost:{
        type:String
    },
    chargeable:{
        type:Boolean,
        default:true
    }

});


/*
        billNo: Bill Reference number is Invoice/Bill number of item purchased
        billDate: Date of Bill
 */

var PurchaseOrderSchema = new AbstractOrdersSchema({

    billNo:{
        type:String
    },
    billDate:{
        type:Date
    },
    finance:{
        type:[PurchaseOrderFinance]
    }
});


var SalesOrderSchema = new AbstractOrdersSchema({

});

var RentalOrderSchema = new AbstractOrdersSchema({

});