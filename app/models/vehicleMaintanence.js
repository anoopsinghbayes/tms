/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 16/08/14
 * Time: 01:49
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Enums
 */

var service_type =
{
    values: ['Service1', 'Service2', 'Service3']
}

/**
 * Maintenance Details Schema
 */
var MaintenanceDetails=new Schema({
    description: {
        type: Date,
        trim: true
    },
    date:{
        type:Date,
        trim:true
    },
    presentKms:{
        type:Date,
        trim:true
    },
    warrantyKms:{
        type:Number,
        trim:true
    },
    warrantyDate:{
        type:Number,
        trim:true
    }
});






/**
 * Vehicle Maintenance Schema
 */
var VehicleMaintenance = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    garageName: {
        type: String,
        trim: true
    },
    vehicleNo:{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    },
    contactNo:{
        type:String,
        trim:true

    },
    serviceType:{
        enum: service_type
    },
    date:{
        type:Date,
        default: Date.now
    },
    labourCharges: {
        type:Number,
        trim:true
    },
    address: {
        type:Date,
        trim:true
    },
    garageCharges: {
        type:Number,
        trim:true
    },
    details: {
        type:[MaintenanceDetails],
        trim:true
    }
});

mongoose.mtModel('VehicleMaintenance', VehicleMaintenance);