// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const db = require('./database/index.js');

const items = [];
const sizeOne = ['s', 'm', 'l'];
const sizeTwo = ['xs', 's', 'm'];
const sizeThree = ['l', 'xl', 'xxl'];
const sizeFour = ['10', '11', '12', '14', '16'];
const sizeFive = ['6', '7', '8', '9', '10', '11', '12'];

for (let i = 1; i < 101; i++) {
  const item = {
    id: i,
    category: faker.commerce.department(),
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: faker.commerce.price(),
    heart: faker.random.boolean(),
  };
  const rando = Math.ceil(Math.random() * 10);
  if (rando < 6) {
    item.sizes = sizeOne;
  } else if (rando === 6) {
    item.sizes = sizeTwo;
  } else if (rando === 7) {
    item.sizes = sizeThree;
  } else if (rando === 8) {
    item.sizes = sizeFour;
  } else if (rando === 9 || rando === 10) {
    item.sizes = sizeFive;
  }
  items.push(item);
}

db.Item.insertMany(items)
  .then(() => {
    console.log(`Seeding complete, ${items.length} new item(s) added.`);
  }).catch((err) => console.error(err));
