module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          nome: 'admin',
          email: 'admin@admin.com',
          password: '123456',
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
