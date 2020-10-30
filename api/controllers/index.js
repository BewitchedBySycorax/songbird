const {
  createBird,
  getAllBirds,
  getBirdById,
  updateBirdCompletely,
  updateBirdPartial,
  deleteBird,
  deleteAllBirds
} = require('./birds')

const {
  createPlayer,
  createGame,
  getEntireStats,
  getCurrentPlayerStats,
  deletePlayer,
  deleteEntireStats,
  updateCurrentGameScore
} = require('./play')

module.exports = {
  createBird,
  getAllBirds,
  getBirdById,
  updateBirdCompletely,
  updateBirdPartial,
  deleteBird,
  deleteAllBirds,

  createPlayer,
  createGame,
  getEntireStats,
  getCurrentPlayerStats,
  deletePlayer,
  deleteEntireStats,
  updateCurrentGameScore
}
