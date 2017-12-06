var Post = require('./post.model');
mongoose = require('mongoose');

function handleError(res, err) {
	return res.status(500).json(err);
}

// GET all posts
exports.index = function(req, res) {

	// if query string userId - /posts?userId={}
	if(typeof req.query.userId != "undefined") {
		var userId_obj = mongoose.Types.ObjectId(req.query.userId);
		Post.find( {userId : userId_obj}, (err, posts) => {
			if (err) { return handleError(res, err); }
			return res.status(200).json(posts);
		});
	}
	// if query string locationId - /posts?locationId={}
	else if(typeof req.query.locationId != "undefined"){
		var locId_obj = mongoose.Types.ObjectId(req.query.locationId);
		Post.find( {locationId : locId_obj}, (err, posts) => {
			if (err) { return handleError(res, err); }
			return res.status(200).json(posts);
		});
	// otherwise get all posts
    } else {
		Post.find( (err, posts) => {
			if (err) { return handleError(res, err); }
			return res.status(200).json(posts);
		});
	}
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
	req.body.userId = mongoose.Types.ObjectId(req.body.userId);
	req.body.locationId = mongoose.Types.ObjectId(req.body.locationId);	
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