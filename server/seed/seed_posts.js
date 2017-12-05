var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surf-db');

var Post = require('../api/posts/post.model');
var posts = require('./posts.json');

Post.find({}).remove(function(){
	Post.create(posts.data, function(){
		console.log('Posts seeded!')
	})
});
