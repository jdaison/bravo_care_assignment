const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const validator = require('../utils/validators/user');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createUser: async (req, res) => {
    try {
      const result = validator.create(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      req.body.password = bcrypt.hashSync(req.body.password);
      const user = await User.create(req.body);
      user.password = '';

      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};
