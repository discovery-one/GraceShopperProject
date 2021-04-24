const router = require('express').Router();
const Order = require('../db/models/order');
const Product = require('../db/models/product');
const Sequelize = require('sequelize');

//GET request for an order
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

//PUT request
router.put('/:id/products/:productId', async (req, res, next) => {
  try {
    const { id } = req.params;
    let order = await Order.findOne({
      where: {
        id,
      },
      include: {
        model: Product,
      },
    });

    const associatedProduct = await Product.findByPk(req.params.productId);

    // await associatedProduct.update(req.body, {
    //   include: {
    //     model: Order,

    //     where: {
    //       quantity: req.body.quantity++,
    //     },
    //   },
    // });

    const addedProduct = await order.addProduct(associatedProduct);
    res.send(addedProduct);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id/products/:productId', async (req, res, next) => {
  try {
    const { id } = req.params;
    let order = await Order.findOne({
      where: {
        id,
      },
      include: {
        model: Product,
      },
    });
    const associatedProduct = await Product.findByPk(req.params.productId);
    const addedProduct = await order.removeProduct(associatedProduct);
    res.send(
      await Order.findOne({
        where: {
          id,
        },
        include: {
          model: Product,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
