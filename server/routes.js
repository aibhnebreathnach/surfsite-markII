module.exports = function(app) {
	app.use('/api/posts', require('./api/posts/index'));
	app.use('/api/users', require('./api/users/index'));
	app.use('/api/locations', require('./api/locations/index'));
  };