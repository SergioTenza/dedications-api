import {Router} from 'express';
const router = Router();

import * as tasksCtrl from '../controllers/tasks.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isCustomer],tasksCtrl.createTask);
router.get('/', authJwt.verifyToken, tasksCtrl.getTasks);
router.get('/:taskId', authJwt.verifyToken, tasksCtrl.getTaskById);
router.put('/:taskId', [authJwt.verifyToken, authJwt.isCustomer], tasksCtrl.updateTaskById);
router.delete('/:taskId', [authJwt.verifyToken, authJwt.isCustomer], tasksCtrl.deleteTaskById);

export default router;