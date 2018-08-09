var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// schematic blue print to your database

var BookSchema = new Schema({
  id: String,
  name: String,
});

var Book = mongoose.model('Bookaa', BookSchema, 'Books');

module.exports = Book;