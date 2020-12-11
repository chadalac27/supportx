const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));


//express urlencoded allows use of params
app.use(require('body-parser').urlencoded({ extended: true }));
//json.. nuff said :D
app.use(express.json());
app.use(require('cookie-parser')());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(passport.initialize());
app.use(passport.session());
// connect mongo server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");
//Open routes
app.use(routes);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.listen(PORT, function() {
  console.log(` Server Running on port ${PORT}!`);
});