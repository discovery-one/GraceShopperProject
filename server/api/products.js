const router = require('express').Router();
const Product = require('../../server/db/models/product');

// GET request api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    const singleProduct = await Product.findAll({
      where: {
        id: productId,
      },
    });
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
