/**
 * Created by anoop on 8/6/14.
 * //this is to allow reference type under multi tenancy using mongoose multi tenant plugin
 //which needs
 */


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema,

    OrderStatus=["open","confirmed","closed","cancelled"];

/**
 * Vehicle Weight Details
 */

var VehicleWeightSchema = new Schema({

        tyreweight:{
        type:String
        
        },
        netweight:{
        type:String
        
        },
        grossweight:{
        type:String
        
        }
    }

);


/**
 * Trip Details
 */


var TripSchema = new Schema({

        pickupLocation:{
        type:String
        
        },
        dropOfflocation:{
        type:String
        
        },
        pickUpdate:{
        type:Date
        
        },
        dropOffdate:{
        type:Date
        
        },
        distance:{
        type:String
        
        },
        vehicleno:{
        type:String
        
        },
        capacity:{
        type:String
        
        },
        dieselUsed:{
        type:String
        
        },
        product:{
        type:String
        
        },
        pickupWeight :{
            tyreweight:{
                        type:String
                        },
            netweight:{
                type:String

                      },
            grossweight:{
                type:String

            }
        },
        dropOffWeight:{
            tyreweight:{
                type:String
            },
            netweight:{
                type:String

            },
            grossweight:{
                type:String

            }
        }
    }
);




/**
 * Order Schema
 */
var OrderSchema = new Schema({

        date:{
            type:Date
            
        },
        status:{
            type:String,
            enum:OrderStatus

        },

        customer:{
            type:Schema.ObjectId,
            ref:'Customer',
            $tenant:true
        },

       trips :[TripSchema]



    }
);
mongoose.mtModel('Order', OrderSchema);
//OrderSchema.plugin(autoIncrement.plugin, 'Order');
