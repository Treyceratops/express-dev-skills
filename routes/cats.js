var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var catsCtrl = require('../controllers/cats');

// All actual paths start with "/cats"

// GET /todos
router.get('/', catsCtrl.index);
// GET /todos
router.get('/', catsCtrl.index);
// GET /todos/:id
router.get('/:id', catsCtrl.show);

module.exports = router;