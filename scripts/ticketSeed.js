const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

// db.Ticket.find({})
//     .populate("owner")
//     .then((data) => {
//         console.log(data);
//     })
let companies = [];
let users = [];

db.Company.find({}).then((dbCompanies) => {
  companies = dbCompanies;
  db.Agent.find({}).then((dbAgents) => {
    users = dbAgents;
    StartSeed();
  });
});

function StartSeed() {
  const ticketSeed = [
    {
      agents: [users[0]._id],
      companyID: companies[0]._id,
      severity: 0,
      title: "Help! My Cats Stuck In a Tree",
      messages: [
        {
          message: "Save My Pussy Cat",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message: "Ok, where is the cat?",
          timeStamp: new Date(),
          senderName: users[0].username,
          avatarURL: users[0].avatarURL
        },
      ],
      channel: "General, Processing, Shipping",
    },
    {
      agents: [users[1]._id],
      companyID: companies[0]._id,
      severity: 8,
      title: "My order is stuck",
      messages: [
        {
          message:
            "Yo... i placed this order for your super weedmates special and the system is sitting here spinning.. whats up?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message:
            "Oh! im sorry to hear you are having problems.  Please try holding ALT and pressing F4 at the same time. Your problem should be resolved ",
          timeStamp: new Date(),
          senderName: users[1].username,
          avatarURL: users[1].avatarURL
        },
      ],
      channel: "Processing",
    },
    {
      agents: [users[1]._id],
      companyID: companies[0]._id,
      severity: 2,
      title: "Can you tell me my tracking number?",
      messages: [
        {
          message:
            "I made a small order and have not recieved a tracking number, can you please send it to me?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message: "What is your order number?",
          timeStamp: new Date(),
          senderName: users[1].username,
          avatarURL: users[1].avatarURL
        },
        {
          message: "My order number is 559137",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message: "I see it!  Your tracking number is #2345fd456ssY",
          timeStamp: new Date(),
          senderName: users[1].username,
          avatarURL: users[1].avatarURL
        },
        {
          message: "Sweet Thank you!",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Shipping",
    },
  ];

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
