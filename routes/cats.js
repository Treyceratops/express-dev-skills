var express = require('express');
var router = express.Router();

var catsCtrl = require('../controllers/cats');

router.get('/', catsCtrl.index);

router.get('/new', catsCtrl.new);

router.get('/:id', catsCtrl.show);

router.post('/', catsCtrl.create)

router.delete('/:id', catsCtrl.delete);

module.exports = router;