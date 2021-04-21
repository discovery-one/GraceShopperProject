const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

// GET request api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
    console.log('PRODUCTS --->', products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
