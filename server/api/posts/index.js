var express = require('express');
var controller = require('./posts.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.options('/:id', controller.add_comment);
router.delete('/:id', controller.destroy);

module.exports = router;