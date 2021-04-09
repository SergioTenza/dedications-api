import {Router} from 'express';

const router = Router();

import * as agendaCtrl from '../controllers/agenda.controller'
import {authJwt} from '../middlewares'

router.get('/', authJwt.verifyToken,authJwt.isAdmin,agendaCtrl.getAgenda)
router.get('/:machineId', authJwt.verifyToken,authJwt.isAdmin,agendaCtrl.getAgendaById)

export default router;