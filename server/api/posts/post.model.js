var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title : { type : String, required: true },
  imageLink : { type : String, required: true },
  description : { type : String, required: true },
  user : [{ type: Schema.Types.ObjectId, ref: 'User', required : true}],
  location : [{ type : Schema.Types.ObjectId, ref : 'Location', required : true}]
});

module.exports = mongoose.model('posts', PostSchema);