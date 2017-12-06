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
	User.create( req.body, (err, user) => {
		return res.status(201).json(user);
	});
};

// DELETE a single user
exports.destroy = function(req, res){
	User.findByIdAndRemove( req.params.id, (err, user) => {
		if (err) { return handleError(res, err); }
		return res.status(201).json(user);
	});
};
