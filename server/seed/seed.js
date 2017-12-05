var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/surf-db');

var Post = require('../api/posts/post.model');
var posts = require('./posts.json');
var User = require('../api/users/user.model');
var users = require('./users.json');
var Location = require('../api/locations/location.model');
var locations = require('./locations.json');

User.find({}).remove(function(){
	User.create(users.data, function(){
		console.log('Users seeded');
	})
});

Location.find({}).remove(function(){
	Location.create(locations.data, function(){
		console.log('Locations seeded');
	})
});

Post.find({}).remove(function(){
	Post.create(posts.data, function(){
		console.log('Posts seeded!')
	})
});
