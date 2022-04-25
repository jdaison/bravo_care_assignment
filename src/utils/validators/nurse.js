const Joi = require('@hapi/joi');

module.exports = {
  update: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(1).max(200),
      hourly_rate: Joi.number().min(1).max(1000),
      start_date: Joi.date(),
    });
    return schema.validate(data);
  },
  create: (data) => {
    const schema = Joi.object({
      name: Joi.string().min(1).max(200).required(),
      hourly_rate: Joi.number().min(1).max(1000).required(),
      start_date: Joi.date().required(),
    });
    return schema.validate(data);
  },
};
