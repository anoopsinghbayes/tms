/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 18/10/14
 * Time: 13:56
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    Animal = mongoose.model('Animal'),
    Dog = mongoose.model('Dog'),
    Kitten = mongoose.model('Ki'),
    qs=require('qs'),
    _ = require('lodash');




exports.create = function(req, res) {
    Kitten =mongoose.mtModel('t2.Kitten');
   Animal=mongoose.mtModel('t2'+'.Animal');
   // Dog=mongoose.mtModel('t2'+'.Dog');
   var bp = new Kitten({name:'jittu',tail_type:'single'});
   // var bp = new Kitten({name:});
    //var bp = new Dog({name:'Dog'});
    //bp.user = req.user;

//   bp.save(function(err) {
//        if (err) {
//            return res.send('500', {
//                errors: err.errors,
//                bp: bp
//            });
//        } else {
//            res.jsonp(bp);
//        }
//    });

    Kitten.find().exec(function(err, bps) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(bps);
        }
    });
};