const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("./models/user");
const env = require("dotenv").config();

//Looks at cookies for the access_token then returns the token if it finds it
const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

//console.log("token: ",process.env.JWT_TOKEN);
//Authorization to protect the endpoints
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_TOKEN,
    },
    (payload, done) => {
        console.log("Here");
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
        { 
            console.log("Error", err);
            return done(err, false);
        }
        if (user) return done(null, user);
        else 
        {
            console.log("Could not find User");
            return done(null, false);
        }
      });
    }
  )
);

//Middleware for authentication
//Authenticated Local strategy using username and password
//*Only used on Login*
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        console.log("Finding User");
      //Something went wrong with database
      if (err) return done(err);

      //Called if no user exists
      if (!user) return done(null, false);

    console.log("Compairing Passwords");
    //Check if password is correct
      user.comparePassword(password, done);
    });
  })
);
