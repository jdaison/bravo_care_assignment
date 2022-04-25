const Joi = require('@hapi/joi');

module.exports = {
  userAndPass: (data) => {
    const schema = Joi.object({
      user: Joi.string().required(),
      password: Joi.string().required(),
    });
    return schema.validate(data);
  },
};
