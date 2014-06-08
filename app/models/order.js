/**
 * Created by anoop on 8/6/14.
 */


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    OrderStatus=["open","confirmed","closed","cancelled"];

/**
 * Order Schema
 */
var OrderSchema = new Schema({
        no: {
            type:String,
            required:true

        },
        date:{
            type:Date,
            required:true
        },
        status:{
            type:String,
            enum:OrderStatus

        },
        customer:{
            type: Schema.ObjectId,
            ref: 'Customer'
        }


    }
);

mongoose.mtModel('Order', OrderSchema);