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
      name: "Mochi Madness",
      owner: agents[0]._id,
      seats: "5",
      agents: [agents[0]._id,agents[1]._id],
      managers:[agents[1]._id],
      avatarURL:
        "https://image.shutterstock.com/image-vector/mochi-icon-wagashi-japanese-rice-260nw-459417508.jpg",
    },
    {
      name: "Nike",
      owner: agents[2]._id,
      seats: "3",
      agents: [agents[2]._id],
      managers:[agents[2]._id],
      avatarURL:
        "https://cdn.iconscout.com/icon/free/png-512/nike-1-202653.png",
    },
    {
      name: "Magic Darts",
      owner: agents[3]._id,
      seats: "5",
      agents: [agents[3]._id],
      managers:[agents[3]._id],
      avatarURL:
        "https://pbs.twimg.com/profile_images/1111768768252923908/hyiHj_ue_400x400.jpg",
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
