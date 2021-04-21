//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');

//associations could go here!

Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order);
Order.belongsToMany(Product, { through: 'OrdersProducts' });
Product.belongsToMany(Order, { through: 'OrdersProducts' });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
  },
};
