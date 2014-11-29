/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 25/11/14
 * Time: 04:21
 * To change this template use File | Settings | File Templates.
 */


/*

Item Master is created to capture all Items like Vehicle,Vehicle Parts or any general Item
for Office use which can't categorized under vehicle related item.All orders will have reference to
Item master for order pricing calculation.Here we will also include cost items like Diesel,Labour charges etc.
Cost Items will have only one entry in master and other attributes of cost item will be captured and saved at order level.

Item Type               Item Title
----------              --------------
1.Vehicle           ---Vehicle
2.Vehicle Parts     ---Engine ,Chasses,Tyre etc.
3.Miscellaneous     ---Fan,Bulb,Table etc
4.Service           ---Salary,Labour
5.Vehicle Docs      ---PUC,State Permit,National Permit
6.Vehicle Tax       ---Toll,Octroi
7.Product           ---All products transported by vehicle


*/


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');


/**
 * Abstract Item Schema
 */
function AbstractItemsSchema() {
    Schema.apply(this, arguments);

    this.add({

        created: {
            type: Date,
            default: Date.now
        },
        description:{type:String},
        mfgDate:{type:Date},            //Manufacturing Date
        expDate:{type:Date},            //Expiry Date
        purchaseDate:{type:Date},
        make:{type:String},             //Manufacturer
        model:{type:String},
        serialNo:{type:String},
        size:{type:String},
        specification:{type:String},
        mfgCost:{type:Number},             //Manufacturing Cost
        salesCost:{type:Number},            //Sales Cost
        itemType:{type:String},          //Item Type
        itemTitle:{type:String}         //Item Name

    });

};



/**
 * Vehicle Schema
 */

var VehicleSchema = new Schema({
        vehicleNumber: {
            type: String,
            required: true
        },
        chassisNumber:{
            type: Number,
            required:true
        },
        size: {
            type: Number,
            default: 0
        },
        capacity:{
            type: Number,
            default: 0
        },
        purchaseDate:{
            type: Date,
            default: Date.now
        },
        manufacturingDate:{
            type: Date,
            default: Date.now
        },
        expirationDate:{
            type: Date,
            default: Date.now
        },
        registrationDate:{
            type: Date,
            default: Date.now
        },
        color: String,
        make: String,
        model: String,
        vehicleType: {
            type: String,
            enum: vehicle_type
        },
        suspensionType: {
            type: String,
            enum: suspension_type
        },
        engineNumber:{
            type: String,
            default: 0
        },
        chassisCost: {
            type: Number,
            default: 0
        },
        makingCost: {
            type: Number,
            default: 0
        },
        garageName: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        contactNumber: {
            type: Number
        },
        tyreDetails: {
            tyre: [{type: Schema.Types.ObjectId, ref: 'Tyre'}]
        }
    }
);
