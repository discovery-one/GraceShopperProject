const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [2, 200],
    },
  },
});

module.exports = Product;
