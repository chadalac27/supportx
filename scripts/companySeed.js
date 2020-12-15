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
      agents: [agents[1]._id,agents[2]._id,agents[3]._id,agents[4]._id,agents[5]._id],
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
      name: "Trilogy Edu",
      owner: agents[2]._id,
      seats: "3",
      agents: [agents[2]._id],
      managers:[agents[2]._id],
      avatarURL:
        "https://photos.angel.co/startups/i/2784197-e6b31eeb437202f94e63c4ab4ca1b94f-medium_jpg.jpg?buster=1477923906",
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
    {
      name: "Weedmates",
      owner: agents[5]._id,
      seats: "5",
      agents: [agents[3]._id, agents[5]._id],
      avatarURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPwBcjF5nDl_h920Hurhkh_dyCAqv8cXCcQ&usqp=CAU",
    },
    {
      name: "Super Similar",
      owner: agents[3]._id,
      seats: "5",
      agents: [agents[3]._id, agents[4]._id],
      avatarURL:
        "https://github.com/jbaxter91/super-similar/blob/master/assets/images/loading_poster.gif?raw=true",
    },
    {
      name: "Quick Trends",
      owner: agents[4]._id,
      seats: "5",
      agents: [agents[4]._id],
      avatarURL:
        "https://github.com/ssbrear/quicktrends-v2/blob/main/public/assets/pictures/logo.png?raw=true",
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
      .then(() => db.Company.create(companySeed[0]))  //Mochi Madness
      .then(() => db.Company.create(companySeed[1]))  //Nike
      .then(() => db.Company.create(companySeed[2]))  //Trilogy Edu
      .then(() => db.Company.create(companySeed[3]))  //Magic Darts
      .then(() => db.Company.create(companySeed[4]))  //weedmates
      .then(() => db.Company.create(companySeed[5]))  //Super Similar
      .then(() => db.Company.create(companySeed[6]))  //Quick trends
      .then((data) => {
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  }
}
