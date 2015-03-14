/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 02/11/14
 * Time: 12:36
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


//Address will have collection and  all businesspartners will refer address from this collection



/**
 * Address Schema
 */
var AddressSchema=new Schema({

        adL1:{
            type: String,

            trim: true
        },
        adL2:{
            type: String,
            trim: true
        },
        street:{
            type: String,
            trim: true
        },
        city:{
            type: String,
            trim: true

        },
        state:{
            type: String
        },
        pin:{
            type: Number

        },
        phM1:{
            type: Number

        },
        phM2:{
            type: Number

        },
        phL:{
            type: Number

        },
        email:{
            type:String,
            trim:true
        },
        user: {
            type: String
        }
});

mongoose.mtModel('Address',AddressSchema);
