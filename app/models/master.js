/**
 * Created by swapnil on 25-Jan-15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    autoIncrement=require('mongoose-auto-increment'),
    Schema = mongoose.Schema;

    require('mongoose-multitenant')('_');

var itemTitleSchema = new Schema({
    itemTitle:{
        type: String
    }
});

var itemCategorySchema = new Schema({
    itemCategory:{
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
mongoose.mtModel('itemCategory',itemCategorySchema);
