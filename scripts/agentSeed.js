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
      "https://image.shutterstock.com/image-vector/mochi-icon-wagashi-japanese-rice-260nw-459417508.jpg",
  },
  {
    username: "mochi_sarah",
    firstName: "Sarah",
    password: "password1",
    lastName: "Mc Testerson",
    emailAddress: "sarah@mochi.com",
    avatarURL:
      "https://image.shutterstock.com/image-vector/mochi-icon-wagashi-japanese-rice-260nw-459417508.jpg",
  },
  {
    username: "iryna",
    firstName: "Iryna",
    password: "password1",
    lastName: "Mc Testerson",
    emailAddress: "iryna@nike.com",
    avatarURL:
      "https://cdn.iconscout.com/icon/free/png-512/nike-1-202653.png",
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
];

db.Agent.remove({})
  .then(() => db.Agent.create(agentSeed[0]))
  .then(() => db.Agent.create(agentSeed[1]))
  .then(() => db.Agent.create(agentSeed[2]))
  .then(() => db.Agent.create(agentSeed[3]))
  .then((data) => {
    //console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
