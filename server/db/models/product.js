const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM('cakes', 'cookies', 'confections'),
  },
  soldAs: {
    type: Sequelize.ENUM('singular', 'bulk'),
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Product;
