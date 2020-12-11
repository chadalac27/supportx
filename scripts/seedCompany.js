//** MAKE SURE TO RUN SEED USER AND RUN SEED TICKET FIRST */
const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

// db.Company.find({})
//     .populate("owner")
//     .then((data) => {
//         console.log(data);
//     })

StartSeed();

function StartSeed() {
  const companySeed = [
    {
      name: "The Bear Den",
      owner: "yolo",
      seats: "5",
      tickets: [],
      agents: [],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
  ];

  let myMan;
  db.User.find({})
    .then((dbUser) => {
      db.Ticket.find({}).then((dbTicket) => {
        myMan = dbUser[0];
        companySeed[0].owner = myMan._id;
        companySeed[0].agents.push({ agentID: myMan._id });
        companySeed[0].tickets.push({ ticketID: dbTicket[0]._id });
        UpdateDB();
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function UpdateDB() {
    db.Company.remove({})
      .then(() => db.Company.collection.insertMany(companySeed))
      .then((data) => {
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
}
