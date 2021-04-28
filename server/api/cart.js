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

/*
router.put("/:orderId/:productId", async (req, res, next) => {
  try {
    let order;
    if (req.params.orderId === null) {
      order = Order.create();
    }
    order = Order.findOne({
      where: {
        id: req.params.orderId,
      },
    });

    let product = await order.getProduct({
      where: {
        id: req.params.productId,
      },
    });
    if (product) {
      await order.setProduct({
        where: {
          id: req.params.productId,
        },
        through: { quantity: myCart.req.body.quantity },
      });
    } else {
      await order.addProduct(await Product.findByPk(req.body.product.id), {
        through: {
          quantity: req.body.quantity,
          priceSnapshot: req.body.product.price,
        },
      });
    }
  } catch (error) {
    console.log("API ERROR: " + error);
    res.sendStatus(501);
  }
});

//One cart per user, //findOrCreate
//modify price

//Need Post Request Route for guests to submit order
*/

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
      //This needs to be separated
      //In add to cart, also increase quantity
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

//PUT request
/*
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

    const addedProduct = await order.addProduct(associatedProduct);
    res.send(addedProduct);
  } catch (err) {
    next(err);
  }
});
*/

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
