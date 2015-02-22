///**
// * Created by swapnil on 15-Aug-14.
// */
//
//
//var mongoose = require('mongoose'),
//    Schema = mongoose.Schema;
//
///**
// *
// * Enum
// */
//
//var vehicle_type =
//{
//    values: ['Truck', 'Tempo', 'Tanker'],
//    message: 'Invalid vehicle type'
//};
//
//var suspension_type =
//{
//    values: ['Suspension1', 'Suspension2', 'Suspension3'],
//    message: 'Invalid tyre type'
//};
//
//
//
//
///**
// * Vehicle Schema
// */
//
//var VehicleSchema = new Schema({
//        vehicleNumber: {
//            type: String,
//            required: true
//        },
//        chassisNumber:{
//            type: Number,
//            required:true
//        },
//        size: {
//            type: Number,
//            default: 0
//        },
//        capacity:{
//            type: Number,
//            default: 0
//        },
//        purchaseDate:{
//            type: Date,
//            default: Date.now
//        },
//        manufacturingDate:{
//            type: Date,
//            default: Date.now
//        },
//        expirationDate:{
//            type: Date,
//            default: Date.now
//        },
//        registrationDate:{
//            type: Date,
//            default: Date.now
//        },
//        color: String,
//        make: String,
//        model: String,
//        vehicleType: {
//            type: String,
//            enum: vehicle_type
//        },
//        suspensionType: {
//            type: String,
//            enum: suspension_type
//        },
//        engineNumber:{
//            type: String,
//            default: 0
//        },
//        chassisCost: {
//            type: Number,
//            default: 0
//        },
//        makingCost: {
//            type: Number,
//            default: 0
//        },
//        garageName: {
//            type: String,
//            trim: true
//        },
//        address: {
//            type: String,
//            trim: true
//        },
//        contactNumber: {
//            type: Number
//        },
//        tyreDetails: {
//            tyre: [{type: Schema.Types.ObjectId, ref: 'Tyre'}]
//        }
//   }
//);
//
//mongoose.mtModel('Vehicle', VehicleSchema);