let express = require('express');
let router = express.Router();
let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let User = require('../api/user/user.model');
module.exports = router;

// BASE PATH: /auth/google

passport.use(new GoogleStrategy({
  clientID: '684619883667-k30621ulprrmei5fsot3j4i5kgunj3b3.apps.googleusercontent.com',
  clientSecret: '3uDb9Ua__hThXVQd7arkiRBe',
  callbackURL: '/auth/google/callback'
}, (token, refreshToken, profile, done) => {
  // Google will send back the token and profile

  User.findOrCreate({
    where: {
      email: profile.emails[0].value,
    }
  })
      .spread((user) => {
        done(null, user);
      })
      .catch(done);

  // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
  /*
    --- fill this part in ---
    */
}));

router.get('/', passport.authenticate('google', { scope: 'email' }));

// handle the callback after Google has authenticated the user
router.get('/callback',
    passport.authenticate('google', {
      successRedirect : '/', // or wherever
      failureRedirect : '/', // or wherever
    })
);
