var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
// schematic blue print to your database

var TestContentSchema = new Schema({
  id: String,
  name: String,
  material: String,
});

var TestContent = mongoose.model('TestContent', TestContentSchema);

module.exports = TestContent;