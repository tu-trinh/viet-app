var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/viet-app");

module.exports.Book = require("./Book");
module.exports.Lesson = require("./Lesson")
module.exports.TestContent = require("./TestContent");