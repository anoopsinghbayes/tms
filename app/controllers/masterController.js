/**
 * Created by swapnil on 25-Jan-15.
 */
var mongoose = require('mongoose'),
    orderItemMapping = mongoose.model('orderItemMapping'),
    qs = require('qs'),
    _ = require('lodash');

/**
 * Create a Master
 */

exports.create = function(req, res) {
    var ordItemModel = mongoose.mtModel(req.user.tenant + '.orderItemMapping');
    console.log(req.body.itemCategory[1].itemTitle[1])
    var ordItem = new ordItemModel({
        orderType:req.body.orderType,
        itemCategory:[
                        {
                            itemCategory:req.body.itemCategory[0].itemCategory,
                            itemTitle:[
                                        {
                                            itemTitle:req.body.itemCategory[0].itemTitle[0].itemTitle
                                        }
                                       ]
                        },
                        {
                            itemCategory:req.body.itemCategory[1].itemCategory,
                            itemTitle:[
                                {
                                    itemTitle:req.body.itemCategory[1].itemTitle[0].itemTitle
                                },
                                {
                                    itemTitle:req.body.itemCategory[1].itemTitle[1].itemTitle
                                }
                            ]
                        }
        ]
    });
    ordItem.user = req.user;
    ordItem.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err
            });
        } else {
            res.jsonp(ordItem);
        }
    });
};

exports.show = function(req, res) {
    var orderType = req.params.orderType;
    var ordItemModel = mongoose.mtModel(req.user.tenant + '.orderItemMapping');
    ordItemModel.findOne({orderType: orderType}).exec(function(err, orderItem) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(orderItem);
        }
    });
};


exports.update = function(req, res) {
    var ordItemModel = mongoose.mtModel(req.user.tenant + '.orderItemMapping');
//    ordItemModel.update({_id: '54c521e84283873c2336d067' },
//        {$push: { 'itemCategory' : 'Vehicle' }},{upsert:true}, function(err, data) {
//            if (err) {
//                return res.send('500', {
//                    errors: err
//                });
//            } else {
//                res.jsonp(data);
//            }
//        });
    var query = {"_id": req.params.orderId};
    var update = {'itemCategory': 'Vehicle Part', 'itemTitle' : 'Tyre'};
    ordItemModel.findOneAndUpdate(query, {$push: update}, {safe: true, upsert: true}, function(err, data){
        if (err) {
            return res.send('500', {
                errors: err
            });
        } else {
            res.jsonp(data);
        }
    });
};

