/**
 * Created by swapnil on 12-Oct-14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Employee Enum's
 */

var gender_type =
{
    values: ['Male', 'Female'],
    message: 'Invalid Sex type'
};

var marital_type =
{
    values: ['Single', 'Married'],
    message: 'Invalid Marital type'
};

var job_type =
{
    values: ['Job1', 'Job2'],
    message: 'Invalid job_type'
};
/**
 * Employee Schema
 */

var EmployeeSchema = new Schema({
        employeeId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            default: ""
        },
        lastName: {
            type: String,
            default: ""
        },
        address:{
            type: String,
            default: ""
        },
        jobTitle:{
            type: String,
            enum: job_type
        },
        phoneNumber: {
            type: Number,
            default: 0
        },
        mobileNumber: {
            type: Number,
            default: 0
        },
        gender:{
            type: String,
            enum: gender_type
        },
        age:{
            type: Number,
            default: 0
        },
        maritalStatus:{
            type: String,
            enum: marital_type
        },
        birthDate:{
            type: Date,
            default: 0
        },
        joinDate:{
            type: Date,
            default: Date.now
        },
        terminationDate:{
            type: Date,
            default: 0
        },
        basicSalary:{
            type: Number,
            default: 0
        }
    }
);

//mongoose.mtModel('Employee', EmployeeSchema);   Employee model already created under business partner schema