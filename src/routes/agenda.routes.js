import {Router} from 'express';

const router = Router();

import * as agendaCtrl from '../controllers/agenda.controller'
import {authJwt} from '../middlewares'

router.get('/', authJwt.verifyToken,authJwt.isAdmin,agendaCtrl.getAgenda)
router.get('/:userId', authJwt.verifyToken,authJwt.isCustomer,agendaCtrl.getAgendaById)
router.get('/maquina/:machineId', authJwt.verifyToken,authJwt.isCustomer,agendaCtrl.getAgendaByMachineId)

export default router;