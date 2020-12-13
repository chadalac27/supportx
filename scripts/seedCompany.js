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
      managers:[],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "The Bear Den2",
      owner: "",
      seats: "3",
      tickets: [],
      agents: [],
      managers:[],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "Big Bears Only",
      owner: "yolo",
      seats: "5",
      tickets: [],
      agents: [],
      managers:[],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "Polar Bear Only",
      owner: "",
      seats: "3",
      tickets: [],
      agents: [],
      managers:[],
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
        companySeed[0].agents.push({agentID:myMan._id });
        companySeed[0].tickets.push({ ticketID: dbTicket[0]._id });
        companySeed[1].owner = myMan._id;
        companySeed[1].agents.push( {agentID:dbUser[1]._id} );
        companySeed[2].owner = dbUser[1]._id;
        companySeed[2].agents.push({agentID: dbUser[0]._id} );  
        companySeed[2].agents.push({agentID: dbUser[1]._id} );
        companySeed[2].managers.push({managerID: dbUser[0]._id} );  
        companySeed[2].managers.push({managerID: dbUser[1]._id} );
        companySeed[3].owner = dbUser[1]._id;
        companySeed[3].agents.push({agentID: dbUser[1]._id } );
        //companySeed[1].tickets.push({ ticketID: dbTicket[0]._id });
        UpdateDB();
      });
    })
    .catch((err) => {
      console.log(err);
    });

  function UpdateDB() {
    db.Company.remove({})
      .then(() => db.Company.create(companySeed[0]))
      .then(() => db.Company.create(companySeed[1]))
      .then(() => db.Company.create(companySeed[2]))
      .then(() => db.Company.create(companySeed[3]))
      .then((data) => {
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
}
