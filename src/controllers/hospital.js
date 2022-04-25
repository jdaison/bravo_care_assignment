const { Hospital } = require('../../models');
const validator = require('../utils/validators/hospital');

module.exports = {
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

  updateHospitalById: async (req, res) => {
    try {
      const result = validator.update(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      const { id } = req.params;
      const [updated] = await Hospital.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedHospital = await Hospital.findOne({ where: { id } });
        return res.status(200).json({ hospital: updatedHospital });
      }
      throw new Error('Hospital not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createHospital: async (req, res) => {
    try {
      const result = validator.create(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      const hospital = await Hospital.create(req.body);
      return res.status(201).json({
        hospital,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  deleteHospital: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Hospital.destroy({
        where: { id },
      });
      if (deleted) {
        return res.status(204).send('Hospital deleted');
      }
      throw new Error('Hospital not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

};
