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

// PUT update in an existing user
exports.update = function(req, res) {
	User.findById(req.params.id, function(err, user){

		// if field present in re.body then update
		// otherwise set as current value
		user.name = req.body.name || user.name;
		user.imageLink = req.body.imageLink || user.imageLink;
		user.email = req.body.email || user.email;
		user.bio = req.body.bio || user.bio;

		user.save( (err, user) => {
			if(err) { return handleError(res, err); }
			return res.status(200).send(user);
		});
		
	});
}

// DELETE a single user
exports.destroy = function(req, res){
	User.findByIdAndRemove( req.params.id, (err, user) => {
		if (err) { return handleError(res, err); }
		return res.status(201).json(user);
	});
};
