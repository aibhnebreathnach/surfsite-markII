var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/surf-db');

var User = require('../api/users/user.model');
var users = require('./json/users.json');

User.find({}).remove(function(){
	User.create(users.data, function(err, users){
		console.log('Users seeded');
		process.exit();
	})
})