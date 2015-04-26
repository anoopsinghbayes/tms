/**
 * Created by swapnil on 21-Mar-15.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Story = mongoose.model('Story'),
    Individual = mongoose.model('Individual'),

    _ = require('lodash');

/**
 * Create
 */
exports.create = function(req, res) {
    Individual = mongoose.mtModel(req.user.tenant+'.Individual');
    Story = mongoose.mtModel(req.user.tenant+'.Story');
    var aaron = new Individual({ name: 'Aaron', age: 100 });
    aaron.save(function(err) {
        console.log(err)
        if (err) {
            return res.send('500', {
                errors: err.errors
            });
        } else {
            var story1 = new Story({
                title: "Once upon a timex.",
                _creator: aaron._id    // assign the _id from the person
            });
            story1.save(function(err) {
                if (err) {
                    return res.send('500', {
                        errors: err.errors
                    });
                } else {
                    res.jsonp(story1);
                }
            });
        }
    });
};

exports.show = function(req, res) {
    Story = mongoose.mtModel(req.user.tenant+'.Story');
    Story
        .findOne({ title: 'Once upon a timex.' })
        .populate('_creator')
        .exec(function (err, story) {
            if (err) {
                return res.send('500', {
                    errors: err.errors
                });
            }
            else {
                res.jsonp(story);
            }
        })
};