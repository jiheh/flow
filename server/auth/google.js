var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../api/users/user.model');
module.exports = router;

// BASE PATH: /auth/google

passport.use(new GoogleStrategy({
      clientID: '684619883667-k30621ulprrmei5fsot3j4i5kgunj3b3.apps.googleusercontent.com',
      clientSecret: '3uDb9Ua__hThXVQd7arkiRBe',
      callbackURL: '/auth/google/callback'
    },
    // Google will send back the token and profile
    function (token, refreshToken, profile, done) {

      User.findOrCreate({
        where: {
          email: profile.emails[0].value
        }
      })
          .spread(function (user) {
            done(null, user);
          })
          .catch(done);

      // the callback will pass back user profile information and each service (Facebook, Twitter, and Google) will pass it back a different way. Passport standardizes the information that comes back in its profile object.
      /*
       --- fill this part in ---
       */
    }));

router.get('/', passport.authenticate('google', { scope : 'email' }));

// handle the callback after Google has authenticated the user
router.get('/callback',
    passport.authenticate('google', {
      successRedirect : '/', // or wherever
      failureRedirect : '/' // or wherever
    })
);