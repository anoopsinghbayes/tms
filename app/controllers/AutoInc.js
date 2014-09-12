/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 11/08/14
 * Time: 22:48
 * To change this template use File | Settings | File Templates.
 */


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    _ = require('lodash');





/**
 * Save Payment
 */
exports.create = function(req, res) {
    console.log(req);
    Book =mongoose.mtModel(req.user.tenant+'.Book');
    var book = new Book(req.body);
    book.user = req.user;

    book.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                book: book
            });
        } else {
            res.jsonp(book);
        }
    });
};

