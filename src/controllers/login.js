const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const validator = require('../utils/validators/login');

require('dotenv').config();

module.exports = {
  signInApp: async (req, res) => {
    try {
      const result = validator.userAndPass(req.body);
      if (!result.error) {
        const { user, password } = req.body;
        const userExists = await User.findOne({
          where: { user },
        });

        if (userExists && bcrypt.compareSync(password, userExists.dataValues.password)) {
          result.password = undefined;
          const token = jwt.sign(
            {
              user,
            },
            process.env.KEY_PRIVATE_JWT,
            {
              expiresIn: 3600 * 24, // expires in 1 day
            },
          );

          return res.status(200).send({
            result,
            token,
          });
        }
      }
      return res.status(404).send('User or password is not valid');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

};
