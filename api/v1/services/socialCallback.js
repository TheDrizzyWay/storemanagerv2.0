import db from '../models';

const { User } = db;
const socialCallback = async (accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;
  const givenName = profile.displayName;
  const familyName = profile.displayName;
  // const { familyName, givenName } = profile.name;
  // const imageUrl = profile.photos[0].value;
  // get provider from profile

  const user = await User.findOrCreate({
    where: { email },
    defaults: {
      firstName: givenName,
      lastName: familyName,
      email,
      password: profile.id,
      role: 'attendant',
    },
  });
  return done(null, user.dataValues);
};

export default socialCallback;
