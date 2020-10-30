const { Router } = require('express')
const controllers = require('../controllers')

const router = Router()

router.get('/', (_, res) => res.send('Songbird RESTful API'))

router.post('/birds', controllers.createBird)
router.get('/birds', controllers.getAllBirds)
router.get('/birds/:id', controllers.getBirdById)
router.put('/birds/:id', controllers.updateBirdCompletely)
router.patch('/birds/:id', controllers.updateBirdPartial)
router.delete('/birds/:id', controllers.deleteBird)
router.delete('/birds', controllers.deleteAllBirds)

router.post('/play/new_player', controllers.createPlayer)
router.post('/play/new_game', controllers.createGame)
router.get('/play', controllers.getEntireStats)
router.get('/play/:id', controllers.getCurrentPlayerStats)
router.delete('/play/:id', controllers.deletePlayer)
router.delete('/play', controllers.deleteEntireStats)
router.patch('/play/:id', controllers.updateCurrentGameScore)

module.exports = router
