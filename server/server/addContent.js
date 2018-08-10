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

const addContentRouter = express.Router();

module.exports = addContentRouter

addContentRouter.use(bodyParser.json());
addContentRouter.use(bodyParser.urlencoded({ extended: true }));
addContentRouter.use(cors());
addContentRouter.use(express.json());
addContentRouter.use(express.urlencoded()); 


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/viet-app");

addContentRouter.post("/:type", (req, res) => {
    var type = req.params.type
    var content = req.body;
    if (type === "book") {
        Book.create(content, function(err, book) {
            if (err) res.send(err)
            else res.json(book)                      
        })     
    }
    if (type === "lesson") {
        Lesson.create(content, function(err, lesson) {
            if (err) res.send(err)
            else res.json(lesson)                      
        })
    } 
    if (type === "exercise") {
        let idToChange = req.body._id;
        Lesson.findByIdAndUpdate(idToChange, {$push: {exercises: req.body.exercises}}, {new: true}, function(err, lesson) {
            if (err) throw err;
            else res.json(lesson)
        })
    }
});
    
addContentRouter.get('/', (req, res, next) => {
    res.send('Hello')
}) 

