//** MAKE SURE TO RUN SEED USER AND RUN SEED TICKET FIRST */
const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

// db.Company.find({})
//     .populate("owner")
//     .then((data) => {
//         console.log(data);
//     })

let agents = [];

db.Agent.find({}).then((dbAgents) => {
  agents = dbAgents;
  StartSeed();
})



function StartSeed() {
  const companySeed = [
    {
      name: "The Bear Den",
      owner: agents[0]._id,
      seats: "5",
      agents: [agents[0]._id,agents[1]._id],
      managers:[agents[1]._id],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "The Bear Den2",
      owner: agents[0]._id,
      seats: "3",
      agents: [agents[1]._id],
      managers:[agents[0]._id],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "Big Bears Only",
      owner: agents[0]._id,
      seats: "5",
      agents: [agents[0]._id],
      managers:[agents[0]._id],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
    {
      name: "Polar Bear Only",
      owner: agents[1]._id,
      seats: "3",
      agents: [agents[1]._id],
      managers:[agents[1]._id],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
  ];

  // let myMan;
  // db.Agent.find({})
  //   .then((dbAgent) => {
  //     db.Ticket.find({}).then((dbTicket) => {
  //       myMan = dbAgent[0];
  //       companySeed[0].owner = myMan._id;
  //       companySeed[0].agents.push({agentID:myMan._id });
  //       companySeed[0].tickets.push({ ticketID: dbTicket[0]._id });
  //       companySeed[1].owner = myMan._id;
  //       companySeed[1].agents.push( {agentID:dbAgent[1]._id} );
  //       companySeed[2].owner = dbAgent[1]._id;
  //       companySeed[2].agents.push({agentID: dbAgent[0]._id} );  
  //       companySeed[2].agents.push({agentID: dbAgent[1]._id} );
  //       companySeed[2].managers.push({managerID: dbAgent[0]._id} );  
  //       companySeed[2].managers.push({managerID: dbAgent[1]._id} );
  //       companySeed[3].owner = dbAgent[1]._id;
  //       companySeed[3].agents.push({agentID: dbAgent[1]._id } );
  //       //companySeed[1].tickets.push({ ticketID: dbTicket[0]._id });
  //       UpdateDB();
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  UpdateDB();
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
