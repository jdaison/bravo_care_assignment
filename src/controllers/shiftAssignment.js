const { ShiftAssignment } = require('../../models');
const validator = require('../utils/validators/shiftAssignment');

module.exports = {
  getAllShiftAssignments: async (req, res) => {
    try {
      const shiftAssignments = await ShiftAssignment.findAll();
      return res.status(200).json({ shiftAssignments });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  createShiftAssignment: async (req, res) => {
    try {
      const result = validator.create(req.body);
      if (result.error) {
        throw new Error(result.error);
      }
      const shiftAssignment = await ShiftAssignment.create(req.body);
      return res.status(201).json({
        shiftAssignment,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

};
