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

router.post('/', async (req, res, next) => {
  try {
    const product = Product.build(req.body);
    await product.save();
    const returnedProduct = product.toJSON();
    res.json(returnedProduct);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    await product.update(req.body);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    await product.destroy();
    res.send(product);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
