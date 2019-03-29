import express from 'express';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';

import router from './v1/routes';
import facebookStrategy from './v1/services/facebookstrategy';
import twitterStrategy from './v1/services/twitterStrategy';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../UI')));
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));

passport.use(facebookStrategy);
passport.use(twitterStrategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use('/api/v1', router);

app.get('/*', (req, res) => {
  res.status(404).send({ message: 'Invalid request.' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
