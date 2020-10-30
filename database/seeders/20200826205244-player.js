/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'players',
    [
      {
        name: 'John Doe I',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Doe II',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Doe III',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Doe IV',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'John Doe V',
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('players', null, {})
}
