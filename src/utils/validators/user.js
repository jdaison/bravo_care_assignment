const Joi = require('@hapi/joi');

module.exports = {
  create: (data) => {
    const schema = Joi.object({
      user: Joi.string().min(5).max(20).required(),
      password: Joi.string().min(6).max(20).required(),
    });
    return schema.validate(data);
  },
};
