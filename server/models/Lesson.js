var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// schematic blue print to your database
var LessonSchema = new Schema({
  id: String,
  name: String,
  content: [{exercises: [String],
            video: String,
            vocab: String,
            blanks: String,
            sentence: String,
            essay: String
            }]
/* If the lesson doesn't include a certain
exercise, we can just put a word to signal
that - our JS algorithms will know and not
render the exercise.
*/
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;