import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';

import socialCallback from './socialCallback';

dotenv.config();


const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, BACKEND_URL } = process.env;

const facebookSetup = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: `${BACKEND_URL}api/v1/auth/facebook/callback`,
  profileFields: ['id', 'emails', 'displayName', 'picture.type(large)'],
};

const facebookStrategy = new FacebookStrategy(facebookSetup, socialCallback);
export default facebookStrategy;
