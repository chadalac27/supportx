const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    emailAddress:{
        type: String,
        trim:true,
        required:true,
        unique:true,
    },
    companies: 
    [
        {type: Schema.Types.ObjectId, ref: 'Company'}
    ],
    avatarURL: {type: String}

  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
