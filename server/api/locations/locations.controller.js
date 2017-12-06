var Location = require('./location.model');

function handleError(res, err) {
	return res.status(500).json(err);
}

// GET all locations
exports.index = function(req, res) {
	Location.find( (err, locations) => {
		if (err) { return handleError(res, err); }
		return res.status(200).json(locations);
	});
};


// GET a single location
exports.show = function(req, res) {
	Location.findById( req.params.id, (err, location) =>{
		if (err) { return handleError(res, err); }
		return res.status(201).json(location);
	});
};


// POST a single new location
exports.create = function(req, res) {
	Location.create( req.body, (err, location) => {
		return res.status(201).json(location);
	});
};

// DELETE a post
exports.destroy = function (req, res) {
	Location.findByIdAndRemove( req.params.id, (err, location) => {
		if (err) { return handleError(res, err); }
		return res.status(201).json(location);
	});
};