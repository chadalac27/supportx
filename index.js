
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");



const PORT = process.env.PORT || 3001;
const app = express();




app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/src/index.js"));
});

app.get("/api/users", (req,res)=>{
    db.User.find({})
    .then((dbUser) => {
        res.json(dbUser)
    })
    .catch((err) => {
        console.log(err);
      //res.status(400).json(err);
    });
})

app.listen(PORT, function() {
  console.log(` Server Running on port ${PORT}!`);
});
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

// // Use apiRoutes
// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs







