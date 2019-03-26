import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';
import db from '../models';

const { User } = db;
dotenv.config();

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

const facebookSetup = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback',
  profileFields: ['id', 'emails', 'displayName', 'picture.type(large)'],
};

const facebookCallback = async (accessToken, refreshToken, profile, cb) => {
  const email = profile.emails[0].value;
  const { familyName, givenName } = profile.name;
  const imageUrl = profile.photos[0].value;

  console.log(profile);
  console.log(imageUrl);

  const user = await User.findOrCreate({
    where: { email },
    defaults: {
      firstName: givenName,
      lastName: familyName,
      email,
      role: 'attendant',
    },
  });
  return cb(null, user.dataValues);
};

const facebookStrategy = new FacebookStrategy(facebookSetup, facebookCallback);

export default facebookStrategy;
