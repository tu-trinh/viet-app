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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); 


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/viet-app");

const addContentRouter = express.Router();

app.post("/:contentType", (req, res) => {
    if (req.params.contentType === "book") {
        Book.create(req.body, function(err, book) {
            if (err) res.send(err)
            else res.json(book)                      
        })
    }
    else if (req.params.contentType === "lesson") {
        Lesson.create(req.body, function(err, lesson) {
            if (err) res.send(err)
            else res.json(lesson)                      
        })
    } 
});
    


app.put("/exercise", (req, res) => {
    let idToChange = req.body._id;
    Lesson.findByIdAndUpdate(idToChange, { $push: {exercises: req.body.exercise}}, {new: true}, function(err, lesson) {
      if (err) throw err;
      else res.json(lesson)
    })
  })

module.exports = addContentRouter