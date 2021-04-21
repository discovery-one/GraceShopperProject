const { green, red } = require('chalk');
const { db } = require('./server/db');
const Product = require('./server/db/models/product');
const User = require('./server/db/models/user');
const Order = require('./server/db/models/order');

const products = [
  {
    name: 'Star Sugar Cookies',
    imageUrl:
      'https://i.pinimg.com/564x/ee/64/be/ee64be94afaee801f68215d7df98dadb.jpg',
    price: 39,
    shortDescription: 'Iced vanilla sugar cookies',
    longDescription:
      'Vanilla sugar cookies with our signature galaxy icing that is out of this world.',
  },
  {
    name: 'Galactic Yule Log',
    imageUrl:
      'https://i.pinimg.com/564x/03/cf/f1/03cff100d379a702b1d5de6eeb8b819d.jpg',
    price: 45,
    shortDescription: 'Lemon cake with custom frosting',
    longDescription:
      'The perfect addition to any celebration, this lemon spiral cake can be filled with the frosting flavor of your choosing. Decorated with a stellar combination of our signature galaxy icing and star sprinkles.',
  },
];
const users = [
  {
    email: 'charlotte@gmail.com',
    firstName: 'Charlotte',
    lastName: 'Ulrich',
    admin: false,
    password: 'password1',
  },
];
const orders = [];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const createdProducts = await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    const createdUsers = await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
