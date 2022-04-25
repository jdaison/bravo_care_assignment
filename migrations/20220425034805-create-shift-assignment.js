module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShiftAssignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addColumn(
      'ShiftAssignments', // name of Source model
      'HospitalId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Hospitals', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL',
      },
    );

    await queryInterface.addColumn(
      'ShiftAssignments',
      'NurseId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Nurses',
          key: 'id',
        },
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ShiftAssignments');
  },
};
