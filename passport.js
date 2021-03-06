const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const Agent = require("./models/agent");
const env = require("dotenv").config();

//Looks at cookies for the access_token then returns the token if it finds it
const cookieExtractor = (req) => {
  let token = null;
  //console.log("passport/cookieExtractor:req.cookies", req.cookies);
  if (req && req.cookies) {
    token = req.cookies["access_token"];
    //console.log("passport/cookieExtractor:token", token);
  }
  //console.log("passport/cookieExtractor:req.cookies", "returning token");
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
        //console.log("Passport/JwtStrategy:payload",payload);
      Agent.findById({ _id: payload.sub }, (err, agent) => {
        if (err)
        { 
            console.log("Error", err);
            return done(err, false);
        }
        if (agent){
          //console.log("Passport/JwtStrategy:payload:agent",agent);
           return done(null, agent)
          }
        else 
        {
            console.log("Could not find Agent");
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
    Agent.findOne({ username }, (err, agent) => {
        //console.log("Finding Agent");
      //Something went wrong with database
      if (err) return done(err);

      //Called if no user exists
      if (!agent) return done(null, false);

    //console.log("Compairing Passwords");
    //Check if password is correct
    agent.comparePassword(password, done);
    });
  })
);
