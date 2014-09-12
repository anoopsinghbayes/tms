/**
 * Created with JetBrains WebStorm.
 * User: Padmaraj
 * Date: 11/08/14
 * Time: 22:14
 * To change this template use File | Settings | File Templates.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/mean-dev");

//autoIncrement.initialize(connection);

var bookSchema = new Schema({

    title: String,
    genre: String,
    publishDate: Date
});

bookSchema.plugin(autoIncrement.plugin, 'Book');
var Book = connection.model('Book', bookSchema);