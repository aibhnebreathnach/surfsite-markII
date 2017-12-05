var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title : { type : String, required: true },
  imageLink : { type : String, required: true },
  description : { type : String, required: true },
  user : { type: Schema.Types.ObjectId, ref: 'User'},
  location : { type : Schema.Types.ObjectId, ref : 'Location'}
});

module.exports = mongoose.model('posts', PostSchema);