import express from 'express';
import userController from '../controllers/usercontroller';
import { requireAuth, adminAuth } from '../middleware/authmiddleware';
import authValidation from '../validations/authvalidation';

const { logIn, signUp } = userController;
const { logInValid, signUpValid } = authValidation;

const authRouter = express.Router();

authRouter.post('/signup', requireAuth, adminAuth, signUpValid, signUp);
authRouter.post('/login', logInValid, logIn);

export default authRouter;
