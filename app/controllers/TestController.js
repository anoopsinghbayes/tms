/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 18/10/14
 * Time: 13:56
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    qs=require('qs'),
    _ = require('lodash'),
    Kitten1=mongoose.model("Animal");

function getObjectClass(obj) {
    if (obj && obj.constructor && obj.constructor.toString) {
        var arr = obj.constructor.toString().match(
            /function\s*(\w+)/);

        if (arr && arr.length == 2) {
            return arr[1];
        }
    }

    return undefined;
}

exports.create = function(req, res) {
var    Kitten =mongoose.mtModel('t2.Kitten');
 var  Animal=mongoose.mtModel('t2'+'.Animal');
   // Dog=mongoose.mtModel('t2'+'.Dog');
   var bp = new Kitten({name:'jittu',tail_type:'single'});
   // var bp = new Kitten({name:});
    //var bp = new Dog({name:'Dog'});
    //bp.user = req.user;
    console.log("instance of mtmodel: ",bp instanceof Kitten);
    console.log("instance of mongoose model: ",bp instanceof Kitten1);
   bp.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                bp: bp
            });
        } else {
            console.log("parent class bp: ",bp.constructor.name );
            res.jsonp(bp);
        }
    });

   /* Kitten.find().exec(function(err, bps) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });*/
};


exports.update = function(req, res) {
    //Customer =mongoose.mtModel(req.user.tenant+'.Customer');
   var Kitten =mongoose.mtModel('t2.Kitten');

    Kitten.findOne({_id: req.params.ID},function(err,kitten){
        console.log('found kitten',kitten);
        console.log("instance of : ",kitten instanceof Kitten);
        console.log("instance of mongoose model: ",kitten instanceof Kitten1);
        //console.log("parent class: ",kitten.constructor.name );
        kitten.name= "MyKitten";
        kitten=_.extend(kitten, req.body);

        kitten.save(function(err) {
            if (err) {

                return res.send('users/signup', {
                    errors: err.errors,
                    customer: customer
                });
            } else {
                res.jsonp(kitten);
            }
        });
    })
};
