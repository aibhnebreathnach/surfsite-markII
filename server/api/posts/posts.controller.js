var _ = require('lodash');
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
	Post.create( req.body, (err, post) => {
		return res.status(201).json(post);
	});
};

// DELETE a post
exports.destroy = function (req, res) {
	Post.findByIdAndRemove( req.params.id, (err, post) => {
		if (err) { return handleError(res, err); }
		return res.status(201).json(post);
	});
};