var _ = require('lodash');
var datastore = require('../datastore');
var User = require('./user.model');

function handleError(res, err) {
	return res.status(500).json(err);
}

// GET all users
exports.index = function(req, res) {
	User.find( (err, users) => {
		if (err) { return handleError(res, err); }
		return res.status(200).json(users);
	});
};


// GET a single user
exports.show = function(req, res) {
	User.findById( req.params.id, (err, user) =>{
		if (err) { return handleError(res, err); }
		return res.status(201).json(user);
	});
};

// POST a single new user
exports.create = function(req, res) {
	var id = datastore.users.length + 1;

	var user = {
		"id": id,
		"name": req.body.name,
		"imageLink": req.body.imageLink,
		"email": req.body.email,
		"bio": req.body.bio
	};

	datastore.users.push(user);

	return res.status(201).json(user);
};

// DELETE a single user
exports.destroy = function(req, res){
	var id = req.params.id;

	var removed_user = _.remove(datastore.users, function(user){
		return user.id == id;
	});

	return res.status(200).json(removed_user);
};
