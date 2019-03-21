import { Router } from 'express';
import authRouter from './authroute';
import userRoute from './userroute';
import productRoute from './productroute';
import categoryRoute from './categoryroute';
import salesRoute from './salesroute';

const router = new Router();

router.use('/auth', authRouter);
router.use('/users', userRoute);
router.use('/products', productRoute);
router.use('/categories', categoryRoute);
// router.use('/sales', salesRoute);

export default router;
