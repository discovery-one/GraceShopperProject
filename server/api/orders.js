const router = require("express").Router();
const Order = require("../db/models/order");

router.put("/", () => {
  console.log("Default ORDER ROUTE");
});

router.put("/:userId", async (req, res, next) => {
  console.log("API REACHED ROUTE");
  try {
    const order = await Order.create({
      userId: req.params.userId,
    });
    console.log("order is", order);
    let myCart = req.body;
    console.log("Keys of myCart");
    for (let i = 0; i < myCart.length; i++) {
      await order.addProduct(await Product.findByPk(myCart[i].product.id), {
        through: { quantity: myCart[i].quantity },
      });
    }
    res.sendStatus(201);
  } catch (error) {
    console.log("API ERROR: " + error);
    res.sendStatus(501);
  }
});
// await orderTwo.removeProduct(await Product.findByPk(15));

/*await orderTwo.addProduct(await Product.findByPk(15), {
         through: { quantity: 12 },
       });*/

module.exports = router;
