const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ShiftAssignment);
    }
  }
  Hospital.init({
    name: DataTypes.STRING,
    billing_code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hospital',
  });

  return Hospital;
};
