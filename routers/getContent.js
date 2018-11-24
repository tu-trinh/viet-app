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
// const mongo_URI = "mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd"//"mongodb://localhost:27017/viet-app"
// var mongoose = require("mongoose");
// // var db = MongoClient.connect(mongo_URI)
// mongoose.Promise = global.Promise;
// mongoose.connect(mongo_URI);

var mongoose = require("mongoose");

var mongoose = require("mongoose");
// const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd"
const assert = require('assert');

var allBooks;
var allLessons;

const findBooks = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Books');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      allBooks = docs;
    //   callback(docs);
    });
  }

const findLessons = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Book1-Lessons');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        allLessons = docs;
    //   callback(docs);
    });
}

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err); // checks to see if err == null, otherwise it will throw an error
    console.log("Connected successfully to server");
    
    const db = client.db('heroku_3z5263pd');
    findBooks(db, () => {client.close()})
    findLessons(db, () => {client.close()})
});

getContentRouter.get("/books", (req, res) => {
    res.send(allBooks)
});

getContentRouter.get("/lessons", (req, res) => {
    res.send(allLessons)
});

getContentRouter.get('/exercises', (req,res) => {
    res.send(allLessons[0])
    /*In the future we can make this dynamic by having the exercise screen send in the request
    a number to specify the index in allLessons, tho we will have to subtract 1 from it to account
    for 0-indexing. We can also send in other info thru the request to help make this responder more
    dynamic.*/
    Lesson.findOne({id:'lesson1'}, {exercises: true}, (err, lesson) => {
        if (err) res.send(err)
        else res.json(lesson)
    })
})

// STATUS: CANNOT PROPERLY CONNECT, HOW DO YOU CONNECT NOT TO A SPECIFIC MLAB DB?
// getContentRouter.get("/books", (req, res) => {
//     // Book.find((err, book) => {
//     //     if (err) res.send(err)
//     //     else res.json(book)                      
//     // })
//     // 
//     // db.collection('Books').find({}).toArray((err, docs) => {
//     //     if (err) {
//     //       console.log(err)
//     //       res.error(err)
//     //     } else {
//     //       res.json(docs)
//     //     }
//     // })
//     // let Books = [{id: 'idlol', name: 'lol'}, {id: 'idlmao', name: 'lmao'}];
// });

// getContentRouter.get("/lessons", (req, res) => {
//     // make searching dynamic
//     Lesson.find((err, lesson) => {
//         if (err) res.send(err)
//         else res.json(lesson)                      
//     })
// })