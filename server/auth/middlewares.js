const User = require('../db/models/user');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const isAdmin = async (req, res, next) => {
  if (!req.user.admin) {
    next(new Error('You are not authorized to use this route'));
  } else {
    next();
  }
};

module.exports = { isAdmin, requireToken };
