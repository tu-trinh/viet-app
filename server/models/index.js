const mongoose = require("mongoose");
let uri = 'mongodb://heroku_3z5263pd:vjgmcq5q9j1s4mhvj6cjqgdoma@ds151753.mlab.com:51753/heroku_3z5263pd';
mongoose.connect(uri);
let db = mongoose.connection;

module.exports.Book = require("./Book");
module.exports.Lesson = require("./Lesson")
module.exports.TestContent = require("./TestContent");