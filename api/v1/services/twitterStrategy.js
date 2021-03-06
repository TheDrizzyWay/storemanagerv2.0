import { Strategy as TwitterStrategy } from 'passport-twitter';
import dotenv from 'dotenv';

import userController from '../controllers/usercontroller';

dotenv.config();

const twitterSetup = {
  consumerKey: process.env.TWITTER_APP_ID,
  consumerSecret: process.env.TWITTER_APP_SECRET,
  callbackURL: '/api/v1/auth/twitter/redirect',
  includeEmail: true,
};

const twitterStrategy = new TwitterStrategy(twitterSetup, userController.strategyCallback);
export default twitterStrategy;
