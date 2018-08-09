var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LessonSchema = new Schema({
    id: String,
    name: String,
    exercises:[{id: String,
              name: String,
              instructions: String,
              title: String,  
              content: String}] // String is the location of the HTML file that contains the content
  });

var bookNumber = 3; 
var modelName =  'Book' + bookNumber + '-Lesson';
var Lesson = mongoose.model(modelName, BookSchema, modelName);

module.exports = Lesson;