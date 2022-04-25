const Joi = require('@hapi/joi');

module.exports = {
  dates: (data) => {
    const schema = Joi.object({
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
    });
    return schema.validate(data);
  },
};
