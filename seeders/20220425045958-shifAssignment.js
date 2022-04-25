module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('ShiftAssignments', [{
      HospitalId: 1,
      NurseId: 1,
      start_date: new Date('2020-01-01 08:00'),
      end_date: new Date('2020-01-01 12:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      HospitalId: 1,
      NurseId: 2,
      start_date: new Date('2020-02-01 08:00'),
      end_date: new Date('2020-02-01 18:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      HospitalId: 2,
      NurseId: 2,
      start_date: new Date('2020-01-02 08:00'),
      end_date: new Date('2020-01-02 12:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      HospitalId: 3,
      NurseId: 3,
      start_date: new Date('2020-03-01 08:00'),
      end_date: new Date('2020-03-01 12:00'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('ShiftAssignments', null, {});
  },
};
