const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Nurse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ShiftAssignment);
    }
  }
  Nurse.init({
    name: DataTypes.STRING,
    hourly_rate: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Nurse',
  });
  return Nurse;
};
