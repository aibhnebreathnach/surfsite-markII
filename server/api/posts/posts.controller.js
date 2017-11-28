var _ = require('lodash');
var datastore = require('../datastore');
var Post = require('./post.model');


function handleError(res, err) {
	return res.status(500).json(err);
}

// GET all posts
exports.index = function(req, res) {
	Post.find( (err, posts) => {
		if (err) { return handleError(res, err); }
		return res.status(200).json(posts);
	});
};


// GET a single post
exports.show = function(req, res) {
	Post.findById( req.params.id, (err, post) => {
		if (err) { return handleError(res, err); }
		return res.status(201).json(post)
	});
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