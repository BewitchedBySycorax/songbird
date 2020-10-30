/* eslint-disable no-unused-vars */

// const { v4 } = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'games',
    [
      {
        // uuid: v4(),
        number: 1,
        player_id: 1,
        scores: 25,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 2,
        player_id: 1,
        scores: 30,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 3,
        player_id: 1,
        scores: 28,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 4,
        player_id: 1,
        scores: 26,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 5,
        player_id: 1,
        scores: 24,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 1,
        player_id: 2,
        scores: 18,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 1,
        player_id: 3,
        scores: 20,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 2,
        player_id: 3,
        scores: 29,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 3,
        player_id: 3,
        scores: 23,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 1,
        player_id: 4,
        scores: 14,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        // uuid: v4(),
        number: 1,
        player_id: 5,
        scores: 15,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('games', null, {})
}
