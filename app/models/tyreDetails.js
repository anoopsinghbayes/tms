/**
 * Created by swapnil on 16-Aug-14.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 *
 * Enums
 */
var tyre_type = {
    values: ['Type1','Type2','Type3'],
    message: 'Invalid Tyre Type'
};

/**
 * Tyre Schema
 */

var TyreSchema = new Schema({
    tyreNumber:{
        type: String,
        required: true
    },
    tyreType:{
        type: String,
        enum: tyre_type
    },
    tyreSize:{
        type: Number,
        default: 0
    },
    warranty: {
        type: Number,
        default: 0
    },
    capacity:{
        type: String
    },
    purchaseFrom:{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    make: {
        type: String
    },
    address: {
        type: String,
        trim: true
    },
    cost: {
        type: Number,
        default: 0
    },
    vehicleNumber:{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

mongoose.mtModel('Tyre', TyreSchema);