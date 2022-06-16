var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var catsCtrl = require('../controllers/cats');

// All actual paths start with "/cats"

// GET /cats
router.get('/', catsCtrl.index);
// GET /cats/new
router.get('/new', catsCtrl.new);
// GET /cats/:id
router.get('/:id', catsCtrl.show);
// create route
router.post('/', catsCtrl.create)
// delete route
router.delete('/:id', catsCtrl.delete);

module.exports = router;