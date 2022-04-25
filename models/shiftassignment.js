const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShiftAssignments extends Model {
    static associate(models) {
      this.belongsTo(models.Hospital);
      this.belongsTo(models.Nurse);
    }
  }
  ShiftAssignments.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ShiftAssignment',
  });

  return ShiftAssignments;
};
