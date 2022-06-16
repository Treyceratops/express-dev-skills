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
    id = parseInt(id);
    return cats.find(cat => cat.id === id);
}

function create(cat) {
    cat.id = Date.now() % 1000000;
    cat.done = false;
    cats.push(cat);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = cats.findIndex(cat => cat.id === id);
    cats.splice(idx, 1);
}