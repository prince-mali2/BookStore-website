import express from 'express';
import * as userController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('', userController.newUser);

router.post('/login', userController.login);

router.post('/forget', userController.forgetPassword);

router.post('/reset', userAuth, userController.resetPassword);

export default router;
