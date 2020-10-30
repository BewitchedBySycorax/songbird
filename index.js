/* eslint-disable no-console */

const { bold } = require('cli-color')
require('dotenv').config()

// ! Check here: why /index ?
const server = require('./server/index')

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
  console.log(bold.underline.xterm(226)(`Server has been started on localhost:${PORT}`))
})
