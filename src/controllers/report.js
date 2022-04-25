const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models');
const validator = require('../utils/validators/reports');

module.exports = {
  getAllNurses: async (req, res) => {
    try {
      const { id } = req.params;
      const result = validator.dates(req.query);
      if (result.error) {
        throw new Error(result.error);
      }

      const report = await sequelize.query(
        `SELECT sa.id , n.name AS nurse_name, h.name  AS hospital_name, 
          h.billing_code AS hospital_code, sa.start_date , sa.end_date,
          ROUND(EXTRACT(EPOCH FROM  sa.end_date - sa.start_date )/3600,2) AS time_assigned,
          n.hourly_rate,
          ROUND(EXTRACT(EPOCH FROM  sa.end_date - sa.start_date )/3600*n.hourly_rate,2) AS amount
        
        FROM "ShiftAssignments" sa

        JOIN "Nurses" n ON sa."NurseId" = n.id         
        JOIN "Hospitals" h ON sa."HospitalId" = h.id
        
        WHERE sa."HospitalId" = :hospital_id AND 
          sa.start_date >= :start_date AND sa.end_date <= :end_date
        `,
        {
          replacements: {
            hospital_id: id,
            ...req.query,
          },
          type: QueryTypes.SELECT,
        },
      );
      return res.status(200).json({ report });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};
