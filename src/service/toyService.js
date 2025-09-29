import { utils } from './utils';

_createToys();
export const toyService = {
  query,
  get,
  remove,
  save,
};

function query(filterBy = {}) {
  const store = utils.loadFromStorage();
  return store;
}

function remove(_toyId) {
  const store = query();
  let toyToRemove = {};
  const filterdStore = store.filterBy((item) => item._id === _toyId);
  utils.saveToStorage(filterdStore);
}

function get(_toyId) {
  const store = query();
  const toy = store.find((item) => item._id === _toyId);
  return toy;
}

function save(toy) {
  const store = query();
  if (toy._id) {
    const index = store.findIndex((item) => item._id === toy._id);
    store.splice(index, 1, toy);
  } else {
    toy._id = 't' + utils.createRandomId();
    toy.createdAt = Date.now();
    store.push(toy);
  }
  utils.saveToStorage(store);
  return toy;
}

function _createToys() {
  let toys = query();
  if (!toys || !toys.length) {
    toys = [];

    for (let i = 0; i < 20; i++) {
      toys.push({
        _id: 't' + utils.createRandomId(),
        name: utils.randomThing('name'),
        price: +(Math.random() * 100).toFixed(2),
        labels: [
          utils.randomThing('label'),
          utils.randomThing('label'),
          utils.randomThing('label'),
        ],
        createdAt: Date.now(),
        inStock: true,
      });
    }
    utils.saveToStorage(toys);
  }
}
