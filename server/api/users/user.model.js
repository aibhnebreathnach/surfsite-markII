var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name : { type : String, required: true },
  imageLink : { type : String, required: true },
  email : { type : String, required: true },
  bio : { type : String, required : true}
});

module.exports = mongoose.model('users', UserSchema);