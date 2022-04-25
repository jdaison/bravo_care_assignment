const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  // eslint-disable-next-line consistent-return
  validateToken: async (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json('Invalid authorization');
      }
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.KEY_PRIVATE_JWT);
      req.userId = decoded.userId;
      req.userType = decoded.type;
      next();
    } catch (err) {
      return res.status(401).json(err.message);
    }
  },
};
