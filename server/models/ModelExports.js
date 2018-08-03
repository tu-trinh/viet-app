var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/viet-app-content");

module.exports.Book = require("./Book");
module.exports.Lesson = require("./Lesson");

