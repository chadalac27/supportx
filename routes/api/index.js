const router = require("express").Router();
const users = require("./user");
const tickets = require("./Ticket");
const companies = require("./Company");

// Book routes
router.use("/users", users);

router.use("/tickets", tickets);

router.use("/companies", companies);

module.exports = router;