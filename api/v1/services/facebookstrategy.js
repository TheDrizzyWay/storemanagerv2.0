import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';

import userController from '../controllers/usercontroller';

dotenv.config();

const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${process.env.BACKEND_URL}api/v1/auth/facebook/callback`,
    profileFields: ['id', 'emails', 'photos', 'displayName'],
  },
  userController.strategyCallback,
);

export default facebookStrategy;
