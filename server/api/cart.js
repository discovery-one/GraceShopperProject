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

router.put('/:userId', async (req, res, next) => {
  console.log('API REACHED ROUTE');
  try {
    const order = await Order.create({
      userId: req.params.userId,
    });
    console.log('order is', order);
    let myCart = req.body;
    console.log(req.body);
    for (let i = 0; i < myCart.length; i++) {
      await order.addProduct(await Product.findByPk(myCart[i].product.id), {
        through: {
          quantity: myCart[i].quantity,
          priceSnapshot: myCart[i].product.price,
        },
      });
    }
    res.sendStatus(201);
  } catch (error) {
    console.log('API ERROR: ' + error);
    res.sendStatus(501);
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
