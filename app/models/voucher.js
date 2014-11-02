/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 02/11/14
 * Time: 17:02
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema;
//enums=require('./app/models/enums'),


/**
 * Voucher Schema
 */
var VoucherSchema = new Schema({

    created: {
        type: Date,
        default: Date.now
    },
    voucherDate: {
        type: Date

    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        trim: true
    },
    remarks: {
        type: String,
        trim: true
    },
    amount:{
        type:String
    }


});