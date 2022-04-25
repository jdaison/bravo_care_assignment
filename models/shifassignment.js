const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShifAssignment extends Model {
    static associate(models) {
      this.belongsTo(models.Hospital);
      this.belongsTo(models.Nurse);
    }
  }
  ShifAssignment.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'ShifAssignment',
  });

  return ShifAssignment;
};
