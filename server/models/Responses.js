var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// schematic blue print to your database
var ResponseSchema = new Schema({
  userId: String,
  response: [{
    bookId: String,
    lessonId: String,
    exerciseId: String,
    answer: [String]
  }]
});

var Response = mongoose.model('Response', ResponseSchema);

module.exports = Book;
