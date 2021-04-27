const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart"));
router.use("/order", require("./orders"));

router.use((req, res, next) => {
  const error = new Error("API route not found!");
  error.status = 404;
  next(error);
});

module.exports = router;
