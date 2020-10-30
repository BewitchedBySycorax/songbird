/* eslint-disable array-bracket-spacing */

const { Bird } = require('../../database/models')

const createBird = async (req, res) => {
  try {
    const bird = await Bird.create(req.body)
    return res.status(201).json(bird)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllBirds = async (_, res) => {
  try {
    const birds = await Bird.findAll()
    return res.status(200).json(birds)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBirdById = async (req, res) => {
  try {
    const { id } = req.params
    const bird = await Bird.findOne({ where: { id } })
    if (bird) {
      return res.status(200).json(bird)
    }
    return res.status(404).send(`Bird with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBirdCompletely = async (req, res) => {
  try {
    const { id } = req.params
    const [ updated ] = await Bird.update(req.body, { where: { id } })
    if (updated) {
      const updatedBird = await Bird.findOne({ where: { id } })
      return res.status(200).json(updatedBird)
    }
    return res.status(404).send(`Bird with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBirdPartial = async (req, res) => {
  try {
    const { id } = req.params
    const bird = await Bird.findOne({ where: { id } })
    const [ updated ] = await Bird.update({ ...bird, ...req.body }, { where: { id } })
    if (updated) {
      const updatedBird = await Bird.findOne({ where: { id } })
      return res.status(200).json(updatedBird)
    }
    return res.status(404).send(`Bird with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBird = async (req, res) => {
  try {
    const { id } = req.params
    const deletedBird = await Bird.destroy({ where: { id } })
    if (deletedBird) {
      return res.status(204).send()
    }
    return res.status(404).send(`Bird with specified id=${id} not found`)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteAllBirds = async (_, res) => {
  try {
    const deletedBirds = await Bird.destroy({ where: { }, truncate: false })
    if (deletedBirds) {
      return res.status(204).send()
    }
    return res.status(404).send('There are no birds in the database')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createBird,
  getAllBirds,
  getBirdById,
  updateBirdCompletely,
  updateBirdPartial,
  deleteBird,
  deleteAllBirds
}
