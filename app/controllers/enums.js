///**
// * Created with JetBrains WebStorm.
// * User: Padmaraj
// * Date: 02/11/14
// * Time: 02:22
// * To change this template use File | Settings | File Templates.
// */
//
var val=require('../models/enums')
exports.all = function(req, res){
    res.jsonp(val);
}