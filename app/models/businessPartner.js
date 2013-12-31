'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Bussiness Partner Schema
 */
var BPSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required:true,
        trim: true
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

mongoose.model('BussinessPartner', BPSchema);