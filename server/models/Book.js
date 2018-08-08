var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// schematic blue print to your database
var LessonSchema = new Schema({
  id: String,
  name: String,
  exercises:[{id: String,
            name: String,
            instructions: String,
            title: String,  
            content: String}] // String is the location of the HTML file that contains the content
});

var BookSchema = new Schema({
  id: String,
  name: String,
  // lessons: [LessonSchema]
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;