var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  content : { type : String, required: true},
  userId : {type: Schema.Types.ObjectId, ref : 'User'}
});

var PostSchema = new Schema({
  title : { type : String, required: true },
  imageLink : { type : String, required: true },
  description : { type : String, required: true },
  userId : { type: Schema.Types.ObjectId, ref: 'User'},
  locationId : { type : Schema.Types.ObjectId, ref : 'Location'},
  comments : [CommentSchema]
});

module.exports = mongoose.model('posts', PostSchema);