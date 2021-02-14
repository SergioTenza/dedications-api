import {Router} from 'express';
const router = Router();

import * as machineCtrl from '../controllers/tasks.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],machineCtrl.createTask);
router.get('/', machineCtrl.getTasks);
router.get('/:taskId', machineCtrl.getTaskById);
router.put('/:taskId', [authJwt.verifyToken, authJwt.isAdmin], machineCtrl.updateTaskById);
router.delete('/:taskId', [authJwt.verifyToken,authJwt.isAdmin], machineCtrl.deleteTaskById);

export default router;