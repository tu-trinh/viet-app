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
var url = "mongodb://localhost:27017/viet-app";
const getContentRouter = express.Router();

module.exports = getContentRouter


getContentRouter.use(bodyParser.json());
getContentRouter.use(bodyParser.urlencoded({ extended: true }));
getContentRouter.use(cors());
getContentRouter.use(express.json());
getContentRouter.use(express.urlencoded()); 


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/viet-app");

getContentRouter.get("/books", (req, res) => {
    Book.find((err, book) => {
        if (err) res.send(err)
        else res.status(200).json(book)
    })
        
    // if (type === "exercise") {
    //     let idToChange = req.body._id;
    //     Lesson.findByIdAndUpdate(idToChange, {$push: {exercises: req.body.exercises}}, {new: true}, function(err, lesson) {
    //         if (err) throw err;
    //         else res.json(lesson)
    //     })
    // }
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

