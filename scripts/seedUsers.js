const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

const userSeed = [
  {
    username: "FluffyBear",
    password: "password1",
    firstName: "Testy",
    lastName: "Mc Testerson",
    emailAddress: "test@testy.com",
    avatarURL:
      "https://cdn0.iconfinder.com/data/icons/brown-bear-emoticon-filled/64/cute_bear_face_avatar-28-512.png",
  },
  {
    username: "FluffyPanda",
    firstName: "Testy2",
    password: "password1",
    lastName: "Mc Testerson2",
    emailAddress: "test@testy2.com",
    avatarURL:
      "https://store.playstation.com/store/api/chihiro/00_09_000/container/SG/en/999/UP2538-CUSA05620_00-ASIA000000000302/1578099581000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000",
  },
];

db.User.remove({})
  .then(() => db.User.create(userSeed[0]))
  .then(() => db.User.create(userSeed[1]))
  .then((data) => {
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
