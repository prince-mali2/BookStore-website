import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();

router.get('',userAuth, cartController.getAll);
router.post('/:_id', userAuth, cartController.add);
router.delete('/:_id', userAuth, cartController.remove);
router.put('/:_id', userAuth, cartController.isPurchased);

export default router;
