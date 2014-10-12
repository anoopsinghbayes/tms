/**
 * Created by swapnil on 12-Oct-14.
 */
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    qs=require('qs'),
    _ = require('lodash');
/**
 * Find Employee by id
 */
exports.show = function(req, res, next) {
    Employee =mongoose.mtModel(req.user.tenant+'.Employee');
    Employee.findOne({_id: req.params.EmployeeId}, function(err, employee) {
        if (err){
            return next(err);
        }
        else{
            res.json(employee);
        }

    });
};

/**
 * Create a Employee
 */
exports.create = function(req, res) {
    Employee =mongoose.mtModel(req.user.tenant+'.Employee');
    var emp = new Employee(req.body);
    console.log(emp)
    emp.user = req.user;

    emp.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                emp: emp
            });
        } else {
            res.jsonp(emp);
        }
    });
};


/*
 Find all Employee
 */
exports.all = function(req, res) {
    //check for search query string
    //and parse the query string to json to use further
    var searchQuery=qs.parse(req.query);
    Employee =mongoose.mtModel(req.user.tenant+'.Employee');
    if (searchQuery.firstName) {
        //for like query on name
        var regex = new RegExp(searchQuery.firstName, 'i');
        Employee.find({firstName: regex})
            .select('employeeId firstName lastName address').exec(function(err, employee) {
                if (err) {
                    res.render('error', {
                        status: 500
                    });
                } else {
                    res.jsonp(employee);
                }
            });
    }
    else
    {
        Employee.find().sort('-created').exec(function(err, employee) {
            if (err) {
                res.render('error', {
                    status: 500
                });
            } else {
                res.jsonp(employee);
            }
        });
    }

};

/**
 * Update a Employee
 */
exports.update = function(req, res) {
    Employee =mongoose.mtModel(req.user.tenant+'.Employee');

    Employee.findOne({_id: req.params.EmployeeId},function(err, employee){

        employee=_.extend(employee, req.body);

        employee.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    employee: employee
                });
            } else {
                res.jsonp(employee);
            }
        });
    })
};
