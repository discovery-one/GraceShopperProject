const router = require('express').Router();
const { OrdersProducts } = require('../db/index');
const Order = require('../db/models/order');
const Product = require('../db/models/product');

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cartContents = await Order.findByPk(id, {
      include: {
        model: Product,
      },
    });
    res.json(cartContents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
