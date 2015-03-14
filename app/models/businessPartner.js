'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');
var AddressSchema = mongoose.model('Address');
var autoIncrement = require('mongoose-auto-increment');
/**
 * Employee Enum
 */

var gender_type =
{
    values: ['Male', 'Female'],
    message: 'Invalid Sex type'
};

var marital_type =
{
    values: ['Single', 'Married'],
    message: 'Invalid Marital type'
};

var job_type =
{
    values: ['Job1', 'Job2'],
    message: 'Invalid job_type'
};

/**
 * Business Partner Schema
 */
function AbstractBusinessPartnerSchema() {
    Schema.apply(this, arguments);

    this.add({
        companyName:{
            type:String,
            required:true
        },
        created: {
            type: Date,
            default: Date.now
        },

        address:
             [AddressSchema.schema]
        ,
        user: {
            type: String
        }


    });

};

util.inherits(AbstractBusinessPartnerSchema, Schema);

var BusinessPartnerSchema = new AbstractBusinessPartnerSchema({});

var CustomerSchema = new AbstractBusinessPartnerSchema({


    credit:{
        limit:{type:Number,min:0,required:false},
        period:{type:Number,min:0,required:false}
    },
    salesRep: {
        name: {
            type: String,
            trim: true
        },
        phL:{
            type:String
        },
        phM:{
            type:String
        }
    }
});

var VendorSchema = new AbstractBusinessPartnerSchema({

    vendorRep: {
        name: {
            type: String,
            trim: true
        }
    }});

var EmployeeSchema = new AbstractBusinessPartnerSchema({

    fName: {
        type: String,
        trim: true
    },
    mName: {
        type: String,
        trim: true
    },
    lName: {
        type: String,
        trim: true
    },
    jobTitle:{
        type: String,
        enum: job_type
    },
    gender:{
        type: String,
        enum: gender_type
    },
    age:{
        type: Number,
        default: 0
    },
    maritalStatus:{
        type: String,
        enum: marital_type
    },
    birthDate:{
        type: Date,
        default: 0
    },
    joinDate:{
        type: Date,
        default: Date.now
    },
    terminationDate:{
        type: Date,
        default: 0
    },
    basicSalary:{
        type: Number,
        default: 0
    },
    licenceNo:{                       // applicable for driver
        type: String
    }
});

var BusinessPartner = mongoose.mtModel('BusinessPartner', BusinessPartnerSchema); // our base model

CustomerSchema.plugin(autoIncrement.plugin,{model: 'Customer'});
var Customer = BusinessPartner.discriminator('Customer', CustomerSchema); // our derived model (see discriminator)

VendorSchema.plugin(autoIncrement.plugin,{model: 'Vendor'});
var Vendor = BusinessPartner.discriminator('Vendor', VendorSchema); // our derived model (see discriminator)

EmployeeSchema.plugin(autoIncrement.plugin,{model: 'Employee'});
var Employee = BusinessPartner.discriminator('Employee', EmployeeSchema); // our derived model (see discriminator)
