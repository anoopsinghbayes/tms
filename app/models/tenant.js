/**
 * Created by anoop on 4/5/14.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//require('mongoose-multitenant')('.');

/**
 * Article Schema
 */
var TenantSchema = new Schema({

    name: {
        type: String,
        required:true,
        trim: true
    },
    _id:{
        type:Number,
        required:true
    }
});

mongoose.Model('tenant', TenantSchema);