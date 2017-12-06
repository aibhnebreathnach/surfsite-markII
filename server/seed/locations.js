var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surf-db');

var Location = require('../api/locations/location.model');
var locations = require('./locations.json');

Location.find({}).remove(function(){
	Location.create(locations.data, function(){
		console.log('Locations seeded');
		process.exit();
	})
})