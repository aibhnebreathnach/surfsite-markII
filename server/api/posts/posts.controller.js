var _ = require('lodash');
var datastore = require('../datastore');

// GET all posts
exports.index = function(req, res) {

	if(req.query.userId != undefined){
		var posts = _.filter(datastore.posts, (post) => {
			return post.userId == req.query.userId;
		});
		return res.status(200).json(posts)
	} else if (req.query.locationId != undefined){
		var posts = _.filter(datastore.posts, (post) => {
			return post.locationId == req.query.locationId;
		});
		return res.status(200).json(posts)
	} else {
		return res.status(200).json(datastore.posts);
	}
};


// GET a single post
exports.show = function(req, res) {
	var id = req.params.id;

	var post = _.filter(datastore.posts, post => {
		return post.id == id;
	});

	return res.status(200).json(post);

};


// POST a single new post
exports.create = function(req, res) {

	var id = datastore.posts.length + 1;

	var post = {
		"id": id,
		"title": req.body.title,
		"imageLink": req.body.imageLink,
		"description": req.body.description,
		"locationId": req.body.locationId,
		"userId": req.body.userId
	};

	datastore.posts.push(post);

	return res.status(201).json(post);
};

// DELETE a post
exports.destroy = function (req, res) {

	var id = req.params.id;

	var removed_post = _.remove(datastore.posts, function(post){
		return post.id == id;
	});

	return res.status(200).json(removed_post);
};