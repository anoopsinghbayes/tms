/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 30/11/14
 * Time: 12:19
 * To change this template use File | Settings | File Templates.
 */



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

var TripSchema = new Schema({

        locationType:{
            type:String           //Location Type = 1.Utlimate Pickup 2.Intermediate Pickup 3.Intermediate Dropoff 4.Ultimate Dropoff

        },
        challanNo:{
            type:String
        },
        challanDate:{
            type:Date
        },
        distanceFromLastPickup:{
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
        type:Schema.ObjectId,
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
        type:Boolean                   //add to customer invoice or keep it as internal expense
    }

});

util.inherits(AbstractOrdersSchema, Schema);
var OrdersSchema = new AbstractOrdersSchema({});


var TripOrderSchema = new AbstractOrdersSchema({

    vehicleNo:{
    type:String

    },
    tripDetails: {
        type: [TripSchema]
    },
    finance:{
        type:[TripOrderFinance]
    }

});

