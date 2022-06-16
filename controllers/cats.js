function index(req, res) {
    res.render('cats/index', {
        cats: Cat.getAll()
    });
};

const Cat = require('../models/cat');

module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render('cats/index', {
        cats: Cat.getAll()
    });
}

function show(req, res) {
    res.render('cats/show', {
        cat: Cat.getOne(req.params.id),
    });
}
