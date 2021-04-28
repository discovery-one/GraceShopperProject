const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { isAdmin, requireToken } = require('../auth/middlewares');

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
