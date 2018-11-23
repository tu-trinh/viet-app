const models = require('../models')
const Book = models.Book;
const Lesson = models.Lesson;

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const getContentRouter = express.Router();

module.exports = getContentRouter


getContentRouter.use(bodyParser.json());
getContentRouter.use(bodyParser.urlencoded({ extended: true }));
getContentRouter.use(cors());
getContentRouter.use(express.json());
getContentRouter.use(express.urlencoded()); 

// getContentRouter.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })
const mongo_URI = "mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd"//"mongodb://localhost:27017/viet-app"
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect(mongo_URI);

getContentRouter.get("/books", (req, res) => {
    Book.find((err, book) => {
        if (err) res.send(err)
        else res.json(book)                      
    })
    // let Books = [{id: 'idlol', name: 'lol'}, {id: 'idlmao', name: 'lmao'}];
});

getContentRouter.get("/lessons", (req, res) => {
    // make searching dynamic
    Lesson.find((err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)                      
    })
})

getContentRouter.get('/exercises', (req,res) => {
    Lesson.findOne({id:'lesson1'}, {exercises: true}, (err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)
    })
})