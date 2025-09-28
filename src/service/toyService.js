const STORE_KEY = 'toyDB';
_createToys();
export const toyService = {
  query,
  get,
  remove,
  save,
};

function query(filterBy = {}) {
  const store = _loadFromStorage();
  return store;
}

function remove(_toyId) {
  const store = query();
  let toyToRemove = {};
  const filterdStore = store.filterBy((item) => item._id === _toyId);
  _saveToStorage(filterdStore);
}

function get(_toyId) {
  const store = query();
  const toy = store.find((item) => item._id === _toyId);
  return toy;
}

function save(toy) {
  const store = query();
  store.push(toy);
  _saveToStorage(store);
}

function _createToys() {
  let toys = query();
  if (!toys || !toys.length) {
    toys = [];

    const labels = [
      'On wheels',
      'Box game',
      'Art',
      'Baby',
      'Doll',
      'Puzzle',
      'Outdoor',
      'Battery Powered',
    ];
    for (let i = 0; i < 20; i++) {
      toys.push({
        _id: 't' + i * Math.random(),
        name: 'Talking Doll',
        price: Math.random() * 10,
        labels: [
          labels[Math.floor(Math.random() * labels.length)],
          labels[Math.floor(Math.random() * labels.length)],
          labels[Math.floor(Math.random() * labels.length)],
        ],
        createdAt: Date.now(),
        inStock: true,
      });
    }
    _saveToStorage(toys);
  }
}

function _saveToStorage(store) {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function _loadFromStorage() {
  return JSON.parse(localStorage.getItem(STORE_KEY));
}
