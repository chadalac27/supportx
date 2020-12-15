const router = require("express").Router();
const ticketController = require("../../controllers/ticketController");

// Matches with "/api/tickets"
router.route("/")
  .get(ticketController.findAll)
  .post(ticketController.create);

// Matches with "/api/tickets/:id"
router
  .route("/:id")
  .get(ticketController.findById)
  .put(ticketController.update)
  .delete(ticketController.remove);

  router
  .route("/by-company/:id")
  .get(ticketController.findByCompanyId);

module.exports = router;
