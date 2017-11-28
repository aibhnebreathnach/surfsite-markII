var _ = require('lodash');
var datastore = require('../datastore');
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

	var id = datastore.locations.length + 1;

	var location = {
		"id": id,
		"town": req.body.town,
		"country": req.body.country
	};

	datastore.locations.push(location);

	return res.status(201).json(location);
};

// DELETE a post
exports.destroy = function (req, res) {

	var id = req.params.id;

	var removed_location = _.remove(datastore.locations, function(location){
		return location.id == id;
	});

	return res.status(200).json(removed_location);
};