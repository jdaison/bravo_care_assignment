module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      user: 'user1',
      password: '$2a$10$LqNZeu5f/WiVyWbsXqXx0uA10CJetkJS6yPWeaCkAxRnRymgl84cq',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
