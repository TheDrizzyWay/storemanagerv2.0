import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';

dotenv.config();

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

const facebookStrategy = new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'emails', 'displayName', 'picture.type(large)'],
});

export default facebookStrategy;
