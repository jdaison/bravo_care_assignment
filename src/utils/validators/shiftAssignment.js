const Joi = require('@hapi/joi');

module.exports = {
  create: (data) => {
    const schema = Joi.object({
      HospitalId: Joi.number().required(),
      NurseId: Joi.number().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
    });
    return schema.validate(data);
  },
};
