'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ShiftAssignments', [{
      HospitalId: 1,
      NurseId: 1,
      start_date: new Date('2020-01-01 08:00'),
      end_date: new Date('2011-01-01 12:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
