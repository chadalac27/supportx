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
      channel: "General, Processing, Shipping"
    },
    {
      agents: [],
      companyID: "5fd64a7461aafa52a4421961",
      severity: 8,
      title: "My order is stuck",
      messages: [
        {
          message: "Yo... i placed this order for your super weedmates special and the system is sitting here spinning.. whats up?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Processing"
    },
    {
      agents: [],
      companyID: "5fd64a7461aafa52a4421961",
      severity: 2,
      title: "Can you tell me my tracking number?",
      messages: [
        {
          message: "I made a small order and have not recieved a tracking number, can you please send it to me?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Shipping"
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
      ticketSeed[1].agents.push({agentID:myMan._id });
      //ticketSeed[0].messages[0].senderName = "Customer";
      ticketSeed[1].messages.push({
        message: "Oh! im sorry to hear you are having problems.  Please try holding ALT and pressing F4 at the same time. Your problem should be resolved ",
        timeStamp: new Date(),
        senderName: myMan.username,
      });
      ticketSeed[2].agents.push({agentID:dbUser[1]._id });
      //ticketSeed[0].messages[0].senderName = "Customer";
      ticketSeed[2].messages.push({
        message: "What is your order number?",
        timeStamp: new Date(),
        senderName: myMan.username,
      });
      ticketSeed[2].messages.push({
        message: "My order number is 559137",
        timeStamp: new Date(),
        senderName: "Customer",
      });
      ticketSeed[2].messages.push({
        message: "I see it!  Your tracking number is #2345fd456ssY",
        timeStamp: new Date(),
        senderName: myMan.username,
      });
      ticketSeed[2].messages.push({
        message: "Sweet Thank you!",
        timeStamp: new Date(),
        senderName: "Customer",
      });
      UpdateDB();
    })
    .catch((err) => {
      console.log(err);
    });

  function UpdateDB() {
    db.Ticket.remove({})
      .then(() => db.Ticket.create(ticketSeed[0]))
      .then(() => db.Ticket.create(ticketSeed[1]))
      .then(() => db.Ticket.create(ticketSeed[2]))
      .then((data) => {
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
}
