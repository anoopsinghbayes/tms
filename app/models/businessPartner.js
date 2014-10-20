'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');


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
        created: {
            type: Date,
            default: Date.now
        },
        firstName: {
            type: String,
            required:true,
            trim: true
        },
        middleName: {
            type: String,
            required:true,
            trim: true
        },
        lastName: {
            type: String,
            required:true,
            trim: true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        addressDetails:{
            created: {
                type: Date,
                default: Date.now
            },
            addressLine1:{
                type: String,
                required:true,
                trim: true
            },
            addressLine2:{
                type: String,
                trim: true
            },
            street:{
                type: String,
                trim: true
            },
            city:{
                type: String,
                trim: true,
                required:true
            },
            state:{
                type: String,
                trim: true,
                required:true
            },
            pinCode:{
                type: Number,
                required:true
            },
            telephoneResidence:{
                type: Number,
                required:true
            },
            mobile:{
                type: Number,
                required:true
            },
            user: {
                type: String
            }
        },
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
    salesrep: {
        name: {
            type: String,
            trim: true
        }
    }
});

var VendorSchema = new AbstractBusinessPartnerSchema({
    representative: {
        name: {
            type: String,
            trim: true
        }
    }});

var EmployeeSchema = new AbstractBusinessPartnerSchema({
    employeeId: {
        type: String,
        required: true
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
    }
});

var BusinessPartner = mongoose.mtModel('BusinessPartner', BusinessPartnerSchema); // our base model
var Customer = BusinessPartner.discriminator('Customer', CustomerSchema); // our derived model (see discriminator)
var Vendor = BusinessPartner.discriminator('Vendor', VendorSchema); // our derived model (see discriminator)
var Employee = BusinessPartner.discriminator('Employee', EmployeeSchema); // our derived model (see discriminator)
