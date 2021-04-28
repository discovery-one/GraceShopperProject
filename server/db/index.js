const db = require('./db');
const Sequelize = require('sequelize');

const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const OrdersProducts = require('./models/ordersProducts');

Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrdersProducts });
Product.belongsToMany(Order, { through: OrdersProducts });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    OrdersProducts,
  },
};
