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
let agents = [];

db.Company.find({}).then((dbCompanies) => {
  companies = dbCompanies;
  db.Agent.find({}).then((dbAgents) => {
    agents = dbAgents;
    StartSeed();
  });
});

function StartSeed() {
  const ticketSeed = [
    {
      agents: [agents[1]._id],
      companyID: companies[0]._id,
      severity: 0,
      title: "What Flavor Mochi Balls do you have?",
      messages: [
        {
          message: "See Title",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message:
            "For a full list of flavors, please visit http://mochi-madness.com/menu",
          timeStamp: new Date(),
          senderName: agents[1].username,
          avatarURL: agents[1].avatarURL,
        },
      ],
      channel: "General",
    },
    {
      agents: [agents[5]._id],
      companyID: companies[4]._id,
      severity: 7,
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
          senderName: agents[5].username,
          avatarURL: agents[5].avatarURL,
        },
      ],
      channel: "Processing",
    },
    {
      companyID: companies[4]._id,
      severity: 10,
      title: "My Weedmate Stole My wallet",
      messages: [
        {
          message:
            "So i matched up with this super hottie and met up with her, got super stoned and had a blast.  30 minutes after leaving i noticed my wallet is missing and she is not responding to my mesages, can you get me her info so i can tell the cops?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Matchmaking",
    },
    {
      companyID: companies[4]._id,
      severity: 10,
      title: "How Do I Block Someone?",
      messages: [
        {
          message:
            "Hey =]  Love the website!  I have a small problem however.  I met up with a guy and smoked some good good and about 30 minutes after we parted ways he started blowing up my account telling me i stole his wallet.  He was so stoned, i dont think he even knew what a wallet was!  Can you tell me how to block him?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Matchmaking",
    },
    {
      agents: [agents[0]._id],
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
          senderName: agents[0].username,
          avatarURL: agents[0].avatarURL,
        },
        {
          message: "My order number is 559137",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message: "I see it!  Your tracking number is #2345fd456ssY",
          timeStamp: new Date(),
          senderName: agents[0].username,
          avatarURL: agents[0].avatarURL,
        },
        {
          message: "Sweet Thank you!",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Shipping",
    },
    {
      agents: [agents[3]._id],
      companyID: companies[3]._id,
      severity: 5,
      title: "How do I filter my search?",
      messages: [
        {
          message:
            "Hi, im on your website and i was curious if you knew how i could filter my search",
          timeStamp: new Date(),
          senderName: "Customer",
        },
        {
          message: "On the left hand side you will see Filters",
          timeStamp: new Date(),
          senderName: agents[3].username,
          avatarURL: agents[3].avatarURL,
        },
      ],
      channel: "General",
    },
    {
      companyID: companies[1]._id,
      severity: 3,
      title: "What Are The Best Shoes?",
      messages: [
        {
          message:
            "Hi, im on your website and i want to know what are the best shoes",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Products",
    },
    {
      companyID: companies[1]._id,
      severity: 1,
      title: "Do you have a retail store?",
      messages: [
        {
          message:
            "See Title",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "General",
    },
    {
      companyID: companies[1]._id,
      severity: 1,
      title: "I need to return my shoes",
      messages: [
        {
          message:
            "I got the wrong size",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Returns",
    },
    {
      agents: [agents[2]._id],
      companyID: companies[2]._id,
      severity: 8,
      title: "Is this correct formatting?",
      messages: [
        {
          message: "(err) => {console.log(err)}",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Formatting",
    },
    {
      agents: [agents[2]._id],
      companyID: companies[2]._id,
      severity: 10,
      title: "When are projects due?",
      messages: [
        {
          message: "When are projects due?",
          timeStamp: new Date(),
          senderName: "Customer",
        },
      ],
      channel: "Homework",
    },
  ];

  db.Ticket.remove({})
    .then(() => db.Ticket.create(ticketSeed[0]))
    .then(() => db.Ticket.create(ticketSeed[1]))
    .then(() => db.Ticket.create(ticketSeed[2]))
    .then(() => db.Ticket.create(ticketSeed[3]))
    .then(() => db.Ticket.create(ticketSeed[4]))
    .then(() => db.Ticket.create(ticketSeed[5]))
    .then(() => db.Ticket.create(ticketSeed[6]))
    .then(() => db.Ticket.create(ticketSeed[7]))
    .then(() => db.Ticket.create(ticketSeed[8]))
    .then(() => db.Ticket.create(ticketSeed[9]))
    .then(() => db.Ticket.create(ticketSeed[10]))
    .then((data) => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
