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
        itemCategory:{type:String}          //Category : ''Standard item' like ant manufactured item and 'Service Item'


    });

};



