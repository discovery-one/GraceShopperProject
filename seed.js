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
    price: 3900,
    shortDescription: 'Iced vanilla sugar cookies',
    longDescription:
      'Vanilla sugar cookies with our signature galaxy icing that is out of this world.',
  },
  {
    name: 'Galactic Yule Log',
    imageUrl:
      'https://i.pinimg.com/564x/03/cf/f1/03cff100d379a702b1d5de6eeb8b819d.jpg',
    price: 4500,
    shortDescription: 'Lemon cake with custom frosting',
    longDescription:
      'The perfect addition to any celebration, this lemon spiral cake can be filled with the frosting flavor of your choosing. Decorated with a stellar combination of our signature galaxy icing and star sprinkles.',
  },
  {
    name: 'Baby Yoda Cookies',
    imageUrl:
      'https://i.pinimg.com/564x/d8/77/ce/d877ce09a587b3eccb61d2e5eb6c438a.jpg',
    price: 4500,
    shortDescription: 'Vanilla sugar cookies',
    longDescription:
      'Tasty, they are. These vanilla sugar cookies will have your tastebuds in a galaxy far, far away.',
  },
  {
    name: 'Galaxy Chocolate Cake',
    imageUrl:
      'https://i.pinimg.com/564x/af/86/99/af8699e8a975f7574fc189e258fb42e0.jpg',
    price: 5500,
    shortDescription: 'Rich chocolate cake and American buttercream',
    longDescription:
      'This decadent chocolate cake is decorated with our signature galaxy icing. The perfect addition to make any celebration stellar.',
  },
  {
    name: 'Old Fashioned Halo Doughnuts',
    imageUrl:
      'https://i.pinimg.com/564x/c6/35/89/c63589324fdc86e257ed2a96381c32ea.jpg',
    price: 3200,
    shortDescription: 'Vanilla bean glazed doughnuts',
    longDescription:
      'Let these delicious donuts tempt you! The perfect vanilla bean glaze is made better with our signature galaxy icing.',
  },
  {
    name: 'Signature Galactic Cookies',
    imageUrl:
      'https://i.pinimg.com/564x/37/c2/46/37c2465cdae025095d0086fbfc303456.jpg',
    price: 3900,
    shortDescription: 'Lemon cookies and vanilla icing',
    longDescription:
      'Our best seller! The cookie that started it all, these lemon meltaways are decorated with our signature galaxy icing and come in a variety of colors and patterns.',
  },
  {
    name: 'Celestial Cheescake',
    imageUrl:
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/14/640x959/gallery-1491600711-delish-galaxy-cheesecake-pin-3.jpg?resize=980:*',
    price: 3500,
    shortDescription: 'Classic berry vanilla cheesecake',
    longDescription:
      'A crisp crust is complimented perfectly with a decadent berry cheesecake. You’ll love this classic cake to the moon and back.',
  },
  {
    name: 'Galaxy Cupcakes',
    imageUrl:
      'https://i.pinimg.com/564x/ca/18/0f/ca180f2600d02be8ba12f148129877bb.jpg',
    price: 4200,
    shortDescription: 'Chocolate cake and American buttercream',
    longDescription:
      'Our delicious chocolate cake made miniature! Enjoy these rich chocolate treats with delicious galactic buttercream that’s out of this world.',
  },
  {
    name: 'Milky Way Meringue Lollipops',
    imageUrl:
      'https://i.pinimg.com/564x/35/3c/08/353c089b9b0ae5a4e109069af6766777.jpg',
    price: 3900,
    shortDescription: 'Vanilla, lemon, or rose',
    longDescription:
      'This light and crisp treat will add a touch of stellar sophistication to your next gathering. Choose from vanilla, lemon, and rose.',
  },
  {
    name: 'Mystic Macarons',
    imageUrl:
      'https://i.pinimg.com/564x/f0/57/26/f05726935407e34ab06b45c1e76495bb.jpg',
    price: 3900,
    shortDescription: 'Coffee, lemon, rose, chocolate, or vanilla',
    longDescription:
      'This Parisian favorite gets an out-of-this-world twist! Choose from coffee, lemon, rose, chocolate, vanilla, or an assortment of these cosmic creations. ',
  },
  {
    name: 'Solar System Cake Collection',
    imageUrl:
      'https://i.pinimg.com/564x/16/5e/81/165e817bbf7faa1635f8db5fc156fdb1.jpg',
    price: 7500,
    shortDescription: 'Lemon cake centerpiece with assorted mini cakes',
    longDescription:
      'A planetary array of cakes to send your next party out of this world. Delicious mini cakes surround a rich two-tier cake so everyone gets to enjoy their favorite flavor.',
  },
  {
    name: 'Earthling Snickerdoodles',
    imageUrl:
      'https://i.pinimg.com/564x/34/c3/ad/34c3ad521f7328cade32bd12b47fa6e7.jpg',
    price: 3400,
    shortDescription: 'Cinnamon sugar cookies',
    longDescription:
      'Spiced with cinnamon and sugar, these tasty treats are the perfect cookie to bring you back to down-to-Earth.',
  },
  {
    name: 'Galactic Popsicles',
    imageUrl:
      'https://i.pinimg.com/564x/3a/c9/28/3ac928e161af2b66bc3ef439623ede06.jpg',
    price: 3200,
    shortDescription: 'Sold May 25 - August 30',
    longDescription:
      'A perfect addition to any summer day, these chilled treats come with our signature galactic icing and mixed berry interior.',
  },
  {
    name: 'Wookiee Cookies',
    imageUrl:
      'https://i.pinimg.com/564x/8c/f0/c0/8cf0c0971f62766c8bda30818c00fb46.jpg',
    price: 4500,
    shortDescription: 'Spiced gingersnaps',
    longDescription:
      'RRWWWGG! Spiced gingersnaps in honor of everyone’s favorite space ape. Decorated with our delectable American Buttercream.',
  },
  {
    name: 'Star Wars Cake',
    imageUrl:
      'https://i.pinimg.com/564x/1b/b9/22/1bb922b7f0d2a3eb4a84fd0971b67a97.jpg',
    price: 7500,
    shortDescription: 'Vanilla or chocolate cake with custom frosting',
    longDescription:
      'This customizable cake can be made for the mega fan at home or in a galaxy far, far away.',
  },
  {
    name: 'Cosmic Covered Strawberries',
    imageUrl:
      'https://i.pinimg.com/564x/b2/9f/db/b29fdbc827bb23ca16c2754315adac53.jpg',
    price: 2800,
    shortDescription: 'Fresh strawberries covered in chocolate',
    longDescription:
      'Our signature galaxy icing layered on top of white and dark chocolate smothered strawberries. We source only the freshest, organic, locally grown berries and deliver them fresh to your doorstep.',
  },
  {
    name: 'Lunar Pies',
    imageUrl:
      'https://i.pinimg.com/564x/b3/c5/74/b3c5742c5a156abe82c9f156f3750e03.jpg',
    price: 3900,
    shortDescription: 'Vanilla moon pies with American buttercream',
    longDescription:
      'This southern classic is drenched in our signature galaxy icing and filled with a rich American buttercream. You’ll love these to the moon and back.',
  },
  {
    name: 'Tiered Solar System Cake',
    imageUrl:
      'https://i.pinimg.com/564x/42/0c/35/420c355d0814dbd80f1f047c99d3155f.jpg',
    price: 15000,
    shortDescription: 'Custom multi-tiered cake',
    longDescription:
      'Our most extravagant cake option for the most stellar gatherings. Any of our cake flavors can be combined to custom build the cake of your dreams. Topped with edible planets.',
  },
  {
    name: 'Star Trek Cupcakes',
    imageUrl:
      'https://i.pinimg.com/564x/f8/51/e0/f851e045ce0c42bfe81647ce578662c7.jpg',
    price: 4500,
    shortDescription: 'Vanilla cake with American buttercream',
    longDescription:
      'Vanilla BEAM me up! These rich vanilla cupcakes are topped with our creamiest buttercream and an edible Galactic Federation topping.',
  },
  {
    name: 'Galactic Bark',
    imageUrl:
      'https://i.pinimg.com/564x/0e/7f/95/0e7f950830f2e9e973dee4a88c71d8a7.jpg',
    price: 3200,
    shortDescription: 'Sold November 15 - January 15',
    longDescription:
      'Seasonal for the holidays! This sweet confection starts with a rich dark chocolate and is swirled with a rich white chocolate galaxy pattern. ',
  },
  {
    name: 'Kirstie Cake Pops',
    imageUrl:
      'https://i.pinimg.com/564x/9f/4a/d7/9f4ad73ad13862f3de00720eadebff70.jpg',
    price: 3200,
    shortDescription: 'Strawberry cake with vanilla icing',
    longDescription:
      'Our favorite strawberry cake is made poppable in cake pop form. Each cake pop is decorated with our signature galacy icing that is out of this world. ',
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
