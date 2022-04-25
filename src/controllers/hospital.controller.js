const { Hospital } = require('../../models');

const createHospital = async (req, res) => {
  try {
    const hospital = await Hospital.create(req.body);
    return res.status(201).json({
      hospital,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.findAll();
    return res.status(200).json({ hospitals });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  createHospital,
  getAllHospitals,
};
