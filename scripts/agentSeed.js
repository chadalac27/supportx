const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

const agentSeed = [
  {
    username: "mochi_dan",
    password: "mochi",
    firstName: "Dan",
    lastName: "Mc Testerson",
    emailAddress: "dan@mochi.com",
    avatarURL:
      "https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png",
  },
  {
    username: "mochi_sarah",
    firstName: "Sarah",
    password: "password1",
    lastName: "Mc Testerson",
    emailAddress: "sarah@mochi.com",
    avatarURL: "https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg"
  },
  {
    username: "iryna",
    firstName: "Iryna",
    password: "password1",
    lastName: "Grom",
    emailAddress: "iryna@nike.com",
    avatarURL:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEDnP5GIHWKKQ/profile-displayphoto-shrink_200_200/0/1517241722381?e=1613606400&v=beta&t=16F_we8beC1eSkPMc09XBy4dfVzoZ1KgbO8vt3Yfavc",
  },
  {
    username: "jbaxter",
    firstName: "John",
    password: "password1",
    lastName: "Mc Testerson",
    emailAddress: "john@a-zdarts.com",
    avatarURL:
      "https://avatars3.githubusercontent.com/u/67088604?s=460&v=4",
  },
  {
    username: "sbrear",
    firstName: "Sebastian",
    password: "password1",
    lastName: "Brear",
    emailAddress: "sbrear@top-dps.com",
    avatarURL:
      "https://avatars1.githubusercontent.com/u/64553379?s=460&u=153d012bdd9372bf1480375ad96cc17a12167dfa&v=4",
  },
  {
    username: "ccoleman",
    firstName: "Chad",
    password: "password1",
    lastName: "Coleman",
    emailAddress: "chadalac@weedmates.com",
    avatarURL:
      "https://avatars0.githubusercontent.com/u/12057073?s=460&u=1d9ec302c8301d0d46d7ff11aca5b94eaca851e8&v=4",
  },
];

db.Agent.remove({})
  .then(() => db.Agent.create(agentSeed[0]))  //mochi_dan
  .then(() => db.Agent.create(agentSeed[1]))  //mochi_sarah
  .then(() => db.Agent.create(agentSeed[2]))  //iryna
  .then(() => db.Agent.create(agentSeed[3]))  //jbaxter
  .then(() => db.Agent.create(agentSeed[4]))  //sbrear
  .then(() => db.Agent.create(agentSeed[5]))  //ccoleman
  .then((data) => {
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
