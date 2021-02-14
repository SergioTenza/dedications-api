import {Router} from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import {verifySignup} from '../middlewares'
import {authJwt} from '../middlewares'

router.post('/signup', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authCtrl.signup);
router.post('/signin', authCtrl.signin);

export default router;