const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");

// db.Company.find({})
//     .populate("owner")
//     .then((data) => {
//         console.log(data);
//     })

function StartSeed(){
  const companySeed = [
    {
      name: "The Bear Den",
      owner: "yolo",
      seats: "5",
      //tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
      avatarURL:
        "https://i1.sndcdn.com/avatars-000560560761-z676ev-t500x500.jpg",
    },
  ];

  let myMan;
  db.User.find({})
    .then((dbUser) => {
      myMan = dbUser[0];
      companySeed[0].owner = myMan._id;
      UpdateDB();
    })
    .catch((err) => {
        console.log(err);
      //res.status(400).json(err);
    });

  function UpdateDB() {
    
    //console.log("updateDB Called");
    //console.log(companySeed);
    // db.Company.remove({})
    //   .then(() => db.Company.collection.insertMany(companySeed))
    //   .then((data) => {
    //     console.log(data.result.n + " records inserted!");
    //     process.exit(0);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     process.exit(1);
    //   });

      
  }
}
