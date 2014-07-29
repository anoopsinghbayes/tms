/**
 * Created by Administrator on 26/07/14.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




/**
 * Vehicle Finance Schema
 */
var VehicleFinanceSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    vehicle: {
        type: String,
        default: '',
        trim: true
    },
    loanType: {
        type: String,
        trim: true
    },
    loanPeriod:{
        type: Number
    },
    assetAmount:{
        type: Number
    },
    paymentFrequency:{
        type: String
    },
    financerName:{
        type:String
    },
    loanAmount:{
        type: Number
    },
    processingCharges:{
       type: Number
    },
    downPayment:{
        type: Number
    },
    interestRate:{
        type: Number
    },
    loanACNo:{
        type: Number
    },
    loanDate:{
        type: Date
    },
    financerAddress:{
        type: String
    },
    contactPerson:{
        type: String
    },
    contactNo:{
        type: Number
    },
    emiDetails:{
        type: [vehicleFinanceDetailsSchema]
    }
}
);
var vehicleFinanceDetailsSchema = new Schema({
    emiAmount:{
        type: Number
    },
    dueDate:{
        type: Date
    },
    payments:{
        type: Number
    }
}
);

mongoose.mtModel('VehicleFinance', VehicleFinanceSchema);