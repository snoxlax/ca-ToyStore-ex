export const utils = {
  randomThing,
  createRandomId,
  saveToStorage,
  loadFromStorage,
};

const STORE_KEY = 'toyDB';

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

const toyNames = [
  'Lego Starship',
  'Barbie Dreamhouse',
  'Hot Wheels Racer',
  "Rubik's Cube",
  'Teddy Bear',
  'Play-Doh Set',
  'Action Figure',
  'Remote Control Car',
  'Yo-Yo',
  'Puzzle Blocks',
  'Slinky',
  'Nerf Blaster',
  'Board Game',
  'Stuffed Dinosaur',
  'Drone Toy',
  'Water Gun',
  'Kite',
  'Model Train',
  'RC Helicopter',
  'Foam Sword',
];

function randomThing(thing) {
  if (thing === 'name') {
    return toyNames[Math.floor(Math.random() * toyNames.length)];
  }
  if (thing === 'label') {
    return labels[Math.floor(Math.random() * labels.length)];
  }
}

function createRandomId(length = 8) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function saveToStorage(store) {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function loadFromStorage() {
  return JSON.parse(localStorage.getItem(STORE_KEY));
}
