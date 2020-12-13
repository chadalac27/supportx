const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

// db.Ticket.find({})
//     .populate("owner")
//     .then((data) => {
//         console.log(data);
//     })
StartSeed();

function StartSeed() {
  const ticketSeed = [
    {
      agents: [],
      companyID: "5fd64a7461aafa52a4421961",
      severity: 0,
      title: "Help! My Cats Stuck In a Tree",
      messages: [
        {
          message: "Save My Pussy Cat",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
    },
  ];

  let myMan;

  db.User.find({})
    .then((dbUser) => {
      myMan = dbUser[0];
      ticketSeed[0].agents.push({agentID:myMan._id });
      //ticketSeed[0].messages[0].senderName = "Customer";
      ticketSeed[0].messages.push({
        message: "Ok, where is the cat?",
        timeStamp: new Date(),
        senderName: myMan.username,
      });
      UpdateDB();
    })
    .catch((err) => {
      console.log(err);
    });

  function UpdateDB() {
    db.Ticket.remove({})
      .then(() => db.Ticket.create(ticketSeed[0]))
      .then((data) => {
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
}
