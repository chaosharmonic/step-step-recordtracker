import { Router } from 'express'

import * as playerController from '../controllers/player'

const playerRouter = Router()

playerRouter.get('/', (req, res, next) => playerController.getAllPlayers(req, res, next))
playerRouter.get('/entry/:id', (req, res, next) => playerController.getPlayerById(req, res, next))
playerRouter.post('/add', (req, res, next) => playerController.addPlayer(req, res, next))
playerRouter.put('/update/:id', (req, res, next) => playerController.updatePlayer(req, res, next))
playerRouter.delete('/delete/:id', (req, res, next) => playerController.deletePlayer(req, res, next))

export default playerRouter
