module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Hospitals', [{
      name: 'Hospital 1',
      billing_code: 'H1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hospital 2',
      billing_code: 'H2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Hospital 3',
      billing_code: 'H3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Hospitals', null, {});
  },
};
