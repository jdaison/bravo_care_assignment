module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Nurses', [{
      name: 'Nurse1',
      hourly_rate: 10.55,
      start_date: new Date('2011-01-01'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nurse 2',
      hourly_rate: 20.43,
      start_date: new Date('2012-01-01'),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Nurse 3',
      hourly_rate: 30.45,
      start_date: new Date('2013-01-01'),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Nurses', null, {});
  },
};
