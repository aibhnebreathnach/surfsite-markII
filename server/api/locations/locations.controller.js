var _ = require('lodash');
var datastore = require('../datastore');

// GET all locations
exports.index = function(req, res) {
	return res.status(200).json(datastore.locations);
};


// GET a single location
exports.show = function(req, res) {
	var id = req.params.id;

	var location = _.filter(datastore.locations, post => {
		return post.id == id;
	});

	return res.status(200).json(location);

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