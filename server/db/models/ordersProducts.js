const Sequelize = require('sequelize');
const db = require('../db');

const OrdersProducts = db.define('orders_products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  priceSnapshot: {
    type: Sequelize.INTEGER,
  },
});

module.exports = OrdersProducts;
