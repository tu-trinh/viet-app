// const models = require('../models')
// const Book = models.Book;
// const Lesson = models.Lesson;

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3007;
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/viet-app";

// const addContentRouter = require("./addContent")
// const getContentRouter = require("./getContent")
// app.use('/addContent', addContentRouter)
// app.use('/api/getContent', getContentRouter)
// const mainRouter = require("../models/index")
// app.use('/api/mainRouter', mainRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); 

var mongoose = require("mongoose");
Schema = mongoose.Schema;
// mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/viet-app");
let uri = 'mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd';
mongoose.connect(uri);
let db = mongoose.connection;

/* We’re using express-jwt to create a middleware
that looks for an incoming JSON Web Token and verifies
it against a secret key that we provide.
*/
// JSON Web Token - Token with a special format

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://mt-at.auth0.com/.well-known/jwks.json"
    }), // I added the .auth0. above
    // This is the identifier we set when we created the API
    audience: 'https://hoctiengviet.com',
    issuer: 'mt-at.auth0.com',
    algorithms: ['RS256']
});

var Book, Lesson, Response, TestContent;

var BookSchema = new Schema({
    id: String,
    name: String,
});
Book = mongoose.model('Book', BookSchema, 'Books');

var LessonSchema = new Schema({
    id: String,
    name: String,
    exercises:[{id: String,
                name: String,
                content: String}]
});
Lesson = mongoose.model('Lesson', LessonSchema, 'Book1-Lessons');

var ResponseSchema = new Schema({
    userId: String,
    response: [{
        bookId: String,
        lessonId: String,
        exerciseId: String,
        answer: [String]
    }]
});
Response = mongoose.model('Response', ResponseSchema);

var TestContentSchema = new Schema({
    id: String,
    name: String,
    material: String,
});
TestContent = mongoose.model('TestContent', TestContentSchema);

app.get("/api/mainRouter/getContent/books", (req, res) => {
    return [{id: '1', name: 'Book1'}, {id: '2', name: 'Book2'}]
    // Book.find((err, book) => {
    //     if (err) res.send(err)
    //     else res.status(200).json(book)
    // })
});

app.get("/api/mainRouter/getContent/lessons", (req, res) => {
    Lesson.find((err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)                      
    })
})

app.get('/api/mainRouter/getContent/exercises', (req,res) => {
    Lesson.findOne({id:'lesson1'}, {exercises: true}, (err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)
    })
})

// app.get('/api/books', authCheck, (req, res) => {
//   let Books = [
//       {
//           id: 'b01',
//           book: 'Sách Cấp 1'
//       },
//       {
//           id: 'b02',
//           book: 'Sách Cấp 2'
//       },
//   ];
//   res.json(Books);
// })

// app.get('/api/:book/lessons', (req, res) => {
//     let Lessons = [
//         {
//           id: 'l01',
//           lesson: 'Bài 1'
//         },
//         {
//           id: 'l02',
//           lesson: 'Bài 2'
//         },
//         {
//           id: 'l03',
//           lesson: 'Bài 3'                                        
//         },
//         {
//           id: 'l04',
//           lesson: 'Bài 4'
//         }
//     ];
//     res.json(Lessons);
//   })

// // Need to add to specific collection
// // Make post instead of get
// // Create controller


// app.put("/updateLesson", (req, res) => {
//   let idToChange = req.body._id;
//   Lesson.findByIdAndUpdate(idToChange, req.body, {new: true}, function(err, lesson) {
//     if (err) throw err;
//     else res.json(lesson)
//   })
// })

// app.post("/addbook", (req, res) => {
//   Book.create(req.body, function(err, book) {
//     if (err) res.send(err)
//     else res.json(book)                      
//   })
// });

app.listen(PORT);
console.log('Listening on port ' + PORT);