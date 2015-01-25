/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 18/10/14
 * Time: 13:59
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
require('mongoose-multitenant')('_');
var util = require('util');


function AbstractAnimalSchema() {
    Schema.apply(this, arguments);

    this.add({
        name: String

    });

};

util.inherits(AbstractAnimalSchema, Schema);

//var oneSchema=new Schema({
//    name:{type:String},
//    arra:[{
//    id:mongoose.Schema.Types.ObjectId,
//    value:{type:String}
//    }]
//})
//
//var twoSchema=new Schema({
//    refval:{
//        name:String,
//        one:{ref:'oneSchema.arr'}
//    }
//})


var AnimalSchema = new AbstractAnimalSchema({});

var KittySchema = new AbstractAnimalSchema({
    tail_type: String
});

var DogSchema = new AbstractAnimalSchema({
    leg_type: String
});

var Animal = mongoose.mtModel('Animal', AnimalSchema); // our base model
var Dog = Animal.discriminator('Dog', DogSchema); // our derived model (see discriminator)
var Kitten = Animal.discriminator('Kitten', KittySchema); // our derived model (see discriminator)
