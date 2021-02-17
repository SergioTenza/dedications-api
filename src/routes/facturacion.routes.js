import {Router} from 'express';
const router = Router();

import * as factCtrl from '../controllers/facturacion.controller'
import {authJwt} from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isAdmin],factCtrl.createFact);
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], factCtrl.getFacts);
router.get('/:customerId', [authJwt.verifyToken, authJwt.isAdmin], factCtrl.getFactById);
router.put('/:customerId', [authJwt.verifyToken, authJwt.isAdmin], factCtrl.updateFactById);
router.delete('/:customerId', [authJwt.verifyToken,authJwt.isAdmin], factCtrl.deleteFactById);

router.get('/customers/', [authJwt.verifyToken, authJwt.isCustomer], factCtrl.getFactCustomerById);


export default router;