const cats = [
    { id: 125223, cat: 'Tabby', cute: true },
    { id: 127904, cat: 'Munchkin', cute: true },
    { id: 139608, cat: 'Hairless', cute: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return cats;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return cats.find(cat => cat.id === id);
}

function create(cat) {
    // Add the id
    cat.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    cat.done = false;
    cats.push(cat);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = cats.findIndex(cat => cat.id === id);
    cats.splice(idx, 1);
}