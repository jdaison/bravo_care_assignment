const { Hospital } = require('../../models');

module.exports = {
  createHospital: async (req, res) => {
    try {
      const hospital = await Hospital.create(req.body);
      return res.status(201).json({
        hospital,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getAllHospitals: async (req, res) => {
    try {
      const hospitals = await Hospital.findAll();
      return res.status(200).json({ hospitals });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getHospitalById: async (req, res) => {
    try {
      const { id } = req.params;
      const hospital = await Hospital.findOne({
        where: { id },
      });
      if (hospital) {
        return res.status(200).json({ hospital });
      }
      return res.status(404).send('Hospital with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};
