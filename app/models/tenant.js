'use strict';
/**
 * Created by anoop on 4/5/14.
 */


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
        type:String,
        required:true
    }
});

mongoose.model('Tenant', TenantSchema);