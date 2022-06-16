const cats = [
    { id: 125223, cat: 'Tabby', cute: true },
    { id: 127904, cat: 'Munchkin', cute: true },
    { id: 139608, cat: 'Hairless', cute: false }
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return cats;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return cats.find(cat => cat.id === id);
}