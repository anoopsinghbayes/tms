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

Item Category           Item Title
----------              --------------
1.Vehicle           ---Vehicle
2.Vehicle Parts     ---Engine ,Chasses,Tyre etc.
3.Miscellaneous     ---Fan,Bulb,Table,printer,Office Stationary etc   --Common Office Items
4.Service           ---Salary,Labour,Electricity,Rent,Telephone,detention Charges(for vehicle)
5.Vehicle Docs      ---PUC,State Permit,National Permit,Safety Certificate,Insurance,Explosive License,Fitness Certificate
6.Tax               ---Toll,Octroi
7.Product           ---Diesel,Petrol,Oil, and All products transported by vehicle


*/


'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');
var autoIncrement = require('mongoose-auto-increment');

/**
 * Abstract Item Schema
 */
function AbstractItemSchema() {
    Schema.apply(this, arguments);

    this.add({

        created: {
            type: Date,
            default: Date.now
        },
        description:{type:String},
        mfgDate:{type:Date},
        expDate:{type:Date},
        make:{type:String},
        model:{type:String},
        serialNo:{type:String},
        size:{type:String},
        color:{type:String},
        specification:{type:String},
        itemType:{type:String},
        mfgCost:{type:Number},
        salesCost:{type:Number},
        itemCategory:{type:String},
        itemTitle:{type:String},
        capacity:{type:String}

    });

};



util.inherits(AbstractItemSchema, Schema);

var ItemSchema = new AbstractItemSchema({});




/**
 * Vehicle Schema
 */

var VehicleSchema = new AbstractItemSchema({

        vehicleNo: {
            type: String

        },
        chassisNo:{
            type: String
        },
        regDate:{
            type: Date,
            default: Date.now
        },
        suspensionType: {
            type: String
        },
        engineNo:{
            type: String,
            default: 0
        },
        garageName: {
            type: String,
            trim: true
        }
    }
);

/*

Vehicle Parts Schema

*/


var VehiclePartSchema = new AbstractItemSchema({

    vehicleNo:{
        type:String
    }
});


var MiscellaneousSchema = new AbstractItemSchema({

});


var ServiceSchema = new AbstractItemSchema({



});

var VehicleDocsSchema = new AbstractItemSchema({

        premium:{
            type:Number
        },
        coverage:{
            type:Number
        },
        vehicleNo:{
            type:String
        }

});


var TaxSchema = new AbstractItemSchema({


});

var ProductSchema = new AbstractItemSchema({


});




var Item = mongoose.mtModel('Item', ItemSchema); // our base model

VehicleSchema.plugin(autoIncrement.plugin, 'Vehicle');
var Vehicle = Item.discriminator('Vehicle', VehicleSchema);

VehiclePartSchema.plugin(autoIncrement.plugin, 'VehiclePart');
var VehiclePart = Item.discriminator('VehiclePart', VehiclePartSchema);

MiscellaneousSchema.plugin(autoIncrement.plugin, 'Miscellaneous');
var Miscellaneous = Item.discriminator('Miscellaneous', MiscellaneousSchema);

ServiceSchema.plugin(autoIncrement.plugin, 'Service');
var Service = Item.discriminator('Service', ServiceSchema);

VehicleDocsSchema.plugin(autoIncrement.plugin, 'VehicleDocs');
var VehicleDocs = Item.discriminator('VehicleDocs', VehicleDocsSchema);

TaxSchema.plugin(autoIncrement.plugin, 'Tax');
var Tax = Item.discriminator('Tax', TaxSchema);

ProductSchema.plugin(autoIncrement.plugin, 'Product');
var Product = Item.discriminator('Product', ProductSchema);
