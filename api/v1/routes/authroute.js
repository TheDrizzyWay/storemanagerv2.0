import express from 'express';
import passport from 'passport';
import userController from '../controllers/usercontroller';
import { requireAuth, adminAuth } from '../middleware/authmiddleware';
import authValidation from '../validations/authvalidation';

const { logIn, signUp } = userController;
const { logInValid, signUpValid } = authValidation;

const authRouter = express.Router();

authRouter.post('/signup', requireAuth, adminAuth, signUpValid, signUp);
authRouter.post('/login', logInValid, logIn);
authRouter.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
authRouter.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/auth/login',
}), () => console.log('working!!!'));

export default authRouter;
