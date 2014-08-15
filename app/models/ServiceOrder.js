/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 15/08/14
 * Time: 22:50
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



/**
 * Service Order Emi Schema
 */
var ServiceOrderEmiSchema=new Schema({
    startDate: {
        type: Date,
        trim: true
    },
    endDate:{
        type:Date,
        trim:true
    },
    daysPerMonth:{
        type:Date,
        trim:true
    },
    amount:{
        type:Number,
        trim:true
    },
    totalAmount:{
        type:Number,
        trim:true
    },
    invoice:{
        type:String,
        trim:true
    },
    payment:{
        type:Number,
        trim:true
    }
});



/**
 * Service Order Schema
 */
var ServiceOrderSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    transporterName: {
        type: String,
        trim: true
    },
    vehicleNo:{
        type:String,
        trim:true
    },
    contactNo:{
        type:String,
        trim:true

    },
    orderStatus:{
        type:String,
        required:true
    },
    address:{
        type:String,
        trim:true
    },
    charges: {
        type:Number,
        trim:true
    },
    orderStartDate: {
        type:Date,
        trim:true
    },
    orderEndDate: {
        type:Date,
        trim:true
    },
    totalDays: {
        type:Number,
        trim:true
    },
    emiDetails: {

      type: [ServiceOrderEmiSchema]
    }
});


mongoose.mtModel('ServiceOrder', ServiceOrderSchema);
