/**
 * Created by swapnil on 21-Mar-15.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
require('mongoose-multitenant')('_');
var util = require('util');

var autoIncrement = require('mongoose-auto-increment');


var individualSchema = Schema({
   // _id     : String,
    name    : String,
    age     : Number,
    stories : [{ type: Schema.Types.ObjectId, ref: 'Story',$tenant:true }]
});

var storySchema = Schema({
    _creator : { type: Schema.Types.ObjectId, ref: 'Individual', $tenant:true},
    title    : String,
    fans     : [{ type: Schema.Types.ObjectId, ref: 'Individual',$tenant:true }]
});

mongoose.mtModel('Individual', individualSchema);
mongoose.mtModel('Story', storySchema);
