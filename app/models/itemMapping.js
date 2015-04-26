/**
 * Created by swapnil on 04-Apr-15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

require('mongoose-multitenant')('_');

var itemTitleSchema = new Schema({
    Title:{
        type: String
    }
});

var itemCategorySchema = new Schema({
    Category:{
        type: String
    },
    itemTitle:[itemTitleSchema]
});

var orderItemMappingSchema = new Schema({
    orderType:{
        type: String
    },
    itemCategory:[itemCategorySchema],
    user: {
        type: String
    }
});

mongoose.mtModel('orderItemMapping',orderItemMappingSchema);
