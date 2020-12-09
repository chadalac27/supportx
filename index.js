const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

//express urlencoded allows use of params
app.use(express.urlencoded({ extended: true }));
//json.. nuff said :D
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// connect mongo server
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/supportx_db");
//Open routes
app.use(routes);

app.listen(PORT, function() {
  console.log(` Server Running on port ${PORT}!`);
});