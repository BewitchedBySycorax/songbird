/* eslint-disable no-console */
/* eslint-disable global-require */

const { bold } = require('cli-color')
const express = require('express')
const cors = require('cors')
const db = require('../database/models')
const routes = require('../api/routes')

const server = express()
// const corsOptions = { origin: 'http://localhost:8001' }

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(cors())

// server.use(cors(corsOptions))
// server.use(express.json())
// server.use(express.urlencoded({ extended: true }))

server.use('/api', routes)

if (process.env.npm_lifecycle_event === 'dev-models') {
  db.sequelize.sync({ force: false }).then(() => {
    console.log(bold.red.underline('Attention! Drop and re-sync db!'))
  })
} else {
  db.sequelize.sync().then(() => console.log(bold.greenBright.underline('Database has been synchronized successfully.')))
}

module.exports = server
