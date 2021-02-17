import {Router} from 'express';
const router = Router();

import * as machineCtrl from '../controllers/machine.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],machineCtrl.createMachine);
router.get('/', authJwt.verifyToken, machineCtrl.getMachines);
router.get('/:machineId', authJwt.verifyToken, machineCtrl.getMachineById);
router.put('/:machineId', [authJwt.verifyToken, authJwt.isAdmin], machineCtrl.updateMachineById);
router.delete('/:machineId', [authJwt.verifyToken, authJwt.isAdmin], machineCtrl.deleteMachineById);

export default router;