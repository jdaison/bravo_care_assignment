const { Nurse } = require('../../models');
const validator = require('../utils/validators/nurse');

module.exports = {
  getAllNurses: async (req, res) => {
    try {
      const nurses = await Nurse.findAll();
      return res.status(200).json({ nurses });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  getNurseById: async (req, res) => {
    try {
      const { id } = req.params;
      const nurse = await Nurse.findOne({
        where: { id },
      });
      if (nurse) {
        return res.status(200).json({ nurse });
      }
      return res.status(404).send('Nurse with the specified ID does not exists');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  updateNurseById: async (req, res) => {
    try {
      const result = validator.update(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      const { id } = req.params;
      const [updated] = await Nurse.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedNurse = await Nurse.findOne({ where: { id } });
        return res.status(200).json({ nurse: updatedNurse });
      }
      throw new Error('Nurse not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createNurse: async (req, res) => {
    try {
      const result = validator.create(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      const nurse = await Nurse.create(req.body);
      return res.status(201).json({
        nurse,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  deleteNurse: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Nurse.destroy({
        where: { id },
      });
      if (deleted) {
        return res.status(204).send('Nurse deleted');
      }
      throw new Error('Nurse not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

};
