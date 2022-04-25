const Joi = require('@hapi/joi');

module.exports = {
  update: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(1).max(200),
      billing_code: Joi.string().min(1).max(3),
    });
    return schema.validate(data);
  },
  create: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(1).max(200).required(),
      billing_code: Joi.string().min(1).max(3).required(),
    });
    return schema.validate(data);
  },
};
