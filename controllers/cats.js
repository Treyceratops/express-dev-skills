function index(req, res) {
    res.render('cats/index', {
        cats: Cat.getAll()
    });
};

const Cat = require('../models/cat');

module.exports = {
    index,
    show,
    new: newCat,
    create,
    delete: deleteCat,
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

function newCat(req, res) {
    res.render('cats/new');
}

function create(req, res) {
    // The model is responsible for creating data
    Cat.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/cats');
}

function deleteCat(req, res) {
    Cat.deleteOne(req.params.id);
    res.redirect('/cats');
}