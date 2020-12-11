const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    //required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  emailAddress: {
    type: String,
    trim: true,
    //required: true,
    unique: true,
  },
  companies: [{ type: Schema.Types.ObjectId, ref: "Company" }],
  avatarURL: { type: String },
});

userSchema.pre("save", function (next) {
  console.log("!!");
  if (!this.isModified("password")) return next();

  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) return next(err);

    this.password = passwordHash;
    console.log("Pre Saved User");
    next();
  });
});

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    // Error so return error
    if (err) return cb(err);
    else {
      // Password not a match, returning ismatch
      if (!isMatch) return cb(null, ismatch);
      //Password is a match, returning this user
      return cb(null, this);
    }
  });
};

module.exports = mongoose.model("User", userSchema);
