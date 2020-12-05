
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes.js");

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});








