module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin@admin.com',
          password:
            '$2b$10$DmtkAuNlG7DyD3qAcKMOiObKmYQAN.ii4ax.v.NIM8ogu8zxJhyeO',
        },
      ],
      {},
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
