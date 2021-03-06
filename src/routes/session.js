import { Router } from 'express'
import * as sessionController from '../controllers/session.js'

const sessionRouter = Router()

sessionRouter.get('/', (req, res, next) => sessionController.getAllSessions(req, res, next))
sessionRouter.get('/entry/:id', (req, res, next) => sessionController.getSessionById(req, res, next))
sessionRouter.get('/player/:id', (req, res, next) => sessionController.getSessionsByPlayer(req, res, next))
sessionRouter.post('/add', (req, res, next) => sessionController.addSession(req, res, next))
sessionRouter.put('/update/:id', (req, res, next) => sessionController.updateSession(req, res, next))
sessionRouter.delete('/delete/:id', (req, res, next) => sessionController.deleteSession(req, res, next))

export default sessionRouter
