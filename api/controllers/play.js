/* eslint-disable array-bracket-spacing */

const { Game } = require('../../database/models')
const { Player } = require('../../database/models')

const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body)
    return res.status(201).json(player)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createGame = async (req, res) => {
  console.log(16, req.body)
  try {
    const game = await Game.create(req.body)
    return res.status(201).json(game)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCurrentPlayerStats = async (req, res) => {
  try {
    const { id } = req.params
    const games = await Player.findOne({
      include: [
        {
          model: Game,
          as: 'games',
          attributes: { exclude: ['playerId'] }
        }
      ],
      where: { id }
    })
    if (games) {
      return res.status(200).json(games)
    }
    return res.status(404).send(`Player with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getEntireStats = async (_, res) => {
  try {
    const games = await Player.findAll({
      include: [
        {
          model: Game,
          as: 'games',
          attributes: { exclude: ['playerId'] }
        }
      ],
      order: [
        ['id', 'ASC']
      ]
    })
    return res.status(200).json(games)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCurrentGameScore = async (req, res) => {
  try {
    const { number, playerId, scores } = req.body
    const updatingGame = await Game.findOne({ where: { playerId, number } })
    const [ updated ] = await Game.update({ ...updatingGame, scores }, { where: { number } })
    if (updated) {
      const updatedGame = await Game.findOne({ where: { number }, attributes: { exclude: ['playerId'] } })
      return res.status(200).json(updatedGame)
    }
    return res.status(404).send(`Game with specified number=${number} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPlayer = await Player.destroy({ where: { id } })
    if (deletedPlayer) {
      return res.status(204).send()
    }
    return res.status(404).send(`Player with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteEntireStats = async (_, res) => {
  try {
    const deletedStats = await Player.destroy({ where: { }, truncate: false })
    if (deletedStats) {
      return res.status(204).send()
    }
    return res.status(404).send('There is no statistics in the database')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlayer,
  createGame,
  getEntireStats,
  getCurrentPlayerStats,
  deletePlayer,
  deleteEntireStats,
  updateCurrentGameScore
}
