/**
 * Created by swapnil on 04-Apr-15.
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
    var ordItem = new ordItemModel({
        orderType:req.body.orderType,
        itemCategory:[
            {
                Category:req.body.itemCategory[0].itemCategory,
                itemTitle:[
                    {
                        Title:req.body.itemCategory[0].itemTitle[0].itemTitle
                    }
                ]
            },
            {
                Category:req.body.itemCategory[1].itemCategory,
                itemTitle:[
                    {
                        Title:req.body.itemCategory[1].itemTitle[0].itemTitle
                    },
                    {
                        Title:req.body.itemCategory[1].itemTitle[1].itemTitle
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
    var itemCategory = req.params.itemCategory;
    var conditions = {};
    var selectFields = {};
    if (orderType){
        conditions = {'orderType': orderType};
    };
    if (itemCategory){
        selectFields = {itemCategory:{$elemMatch:{Category:itemCategory}}};
    };
    var ordItemModel = mongoose.mtModel(req.user.tenant + '.orderItemMapping');
    ordItemModel.find(conditions).select(selectFields).exec(function(err, orderItem) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(orderItem);
        }
    });
};
