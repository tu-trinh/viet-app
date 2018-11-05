const mongoose = require("mongoose");
Schema = mongoose.Schema;

let uri = 'mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd';
mongoose.connect(uri);
let db = mongoose.connection;

// from getContent.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRouter = express.Router();
module.exports = mainRouter;
// Here
mainRouter.use(bodyParser.json());
mainRouter.use(bodyParser.urlencoded({ extended: true }));
mainRouter.use(cors());
mainRouter.use(express.json());
mainRouter.use(express.urlencoded());
// End Here

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback() {
    var BookSchema = new Schema({
        id: String,
        name: String,
    });
    var Book = mongoose.model('Book', BookSchema, 'Books');

    var LessonSchema = new Schema({
        id: String,
        name: String,
        exercises:[{id: String,
                  name: String,
                  content: String}]
    });
    var Lesson = mongoose.model('Lesson', LessonSchema, 'Book1-Lessons');

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

    var TestContentSchema = new Schema({
        id: String,
        name: String,
        material: String,
    });
    var TestContent = mongoose.model('TestContent', TestContentSchema);
    
    // from getContent.js
    mongoose.Promise = global.Promise;

    mainRouter.get("/books", (req, res) => {
        Book.find((err, book) => {
            if (err) res.send(err)
            else res.status(200).json(book)
        })
    });

    mainRouter.get("/lessons", (req, res) => {
        Lesson.find((err, lesson) => {
            if (err) res.send(err)
            else res.json(lesson)                      
        })
    })

    mainRouter.get('/exercises', (req,res) => {
        Lesson.findOne({id:'lesson1'}, {exercises: true}, (err, lesson) => {
            if (err) res.send(err)
            else res.json(lesson)
        })
    })
})

// module.exports.Book = require("./Book");
// module.exports.Lesson = require("./Lesson")
// module.exports.TestContent = require("./TestContent");