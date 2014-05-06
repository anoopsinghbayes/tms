'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Bussiness Partner Schema
 */
var CustomerSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required:true,
        trim: true
    },
    contact:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true

    },
    address:{
        type:String,
        required:true
    },
    credit:{
        limit:{type:Number,min:0,required:false},
        period:{type:Number,min:0,required:false}

    },

    salesrep: {
        type: String,
        required:true,
        trim: true
    }, user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Customer', CustomerSchema);