const router = require("express").Router();
const users = require("./User");
const tickets = require("./Ticket");
const companies = require("./Company");
const openAPI = require("./OpenAPI");

// all routes
//*if* the URL path starts with "/api/users" then we call user.js inside api folder
router.use("/users", users);

//*if* the URL path starts with "/api/tickets" then we call tickets.js inside api folder
router.use("/tickets", tickets);

//*if* the URL path starts with "/api/companies" then we call companies.js inside api folder
router.use("/companies", companies);

module.exports = router;