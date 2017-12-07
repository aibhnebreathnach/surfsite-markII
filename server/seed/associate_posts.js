var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surf-db');

var Post = require('../api/posts/post.model');
var posts = require('./json/posts.json');
var User = require('../api/users/user.model');
var Location = require('../api/locations/location.model');

Post.find({}, function(err, posts) {

	// Associate random users and location with each post
	posts.map( post => {
		// Get the count of all users
		User.count( function (err, count) {
			// Get a random entry
			var random = Math.floor(Math.random() * count)
			// Again query all users but only fetch one offset by our random #
			User.findOne().skip(random).exec(
				function (err, result) {
				post.userId = mongoose.Types.ObjectId(result._id); 
				post.save(function(err) {
					if (err)
					  console.log('error')
					else
					  console.log('success')
				  });
			});
		});

		// same for location
		Location.count(function (err, count) {
			var random = Math.floor(Math.random() * count)
			Location.findOne().skip(random).exec(
				function (err, result) {
				post.locationId = mongoose.Types.ObjectId(result._id);
				post.save(function(err) {
					if (err)
					  console.log('error')
					else
					  console.log('success')
				  }); 
			});
		});
	})
});
