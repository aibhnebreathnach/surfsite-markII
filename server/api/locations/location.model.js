var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  town : { type : String, required: true },
  country : { type : String, required: true }
});

module.exports = mongoose.model('locations', LocationSchema);