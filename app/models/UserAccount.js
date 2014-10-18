/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 12/10/14
 * Time: 12:47
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');


/**
 * Payment Schema
 */
var UserAccountSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },

    AccountNo:
    {
        type : String
    },
   Name:
   {
       type : String
   },
    AccountType :
    {
        type : String
       //  Driver,Customer,Miscellaneous,Vendor

    }



});


mongoose.model('UserAccount', UserAccountSchema);