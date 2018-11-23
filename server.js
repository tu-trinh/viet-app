// 11/22 reset to when our database stuff wasn't screwed up

const models = require('./models')
const Book = models.Book;
const Lesson = models.Lesson;

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/viet-app";
const PORT = 3007;

// const host = request.headers.host;
// console.log("test");
// console.log(host);

const addContentRouter = require("./routers/addContent")
const getContentRouter = require("./routers/getContent")
const mainRouter = require('./models/index')
app.use('/addContent', addContentRouter)
app.use('/api/getContent', getContentRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); 

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd");

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

// app.get('/api/books', (req, res) => {
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

// Need to add to specific collection
// Make post instead of get
// Create controller


app.put("/updateLesson", (req, res) => {
  let idToChange = req.body._id;
  Lesson.findByIdAndUpdate(idToChange, req.body, {new: true}, function(err, lesson) {
    if (err) throw err;
    else res.json(lesson)
  })
})

app.post("/addbook", (req, res) => {
  Book.create(req.body, function(err, book) {
    if (err) res.send(err)
    else res.json(book)                      
  })
});



app.listen(PORT, () => {console.log('Listening on port ' + PORT)});