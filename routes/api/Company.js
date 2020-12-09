const router = require("express").Router();
const companyController = require("../../controllers/companyController");

// Matches with "/api/tickets"
router.route("/")
  .get(companyController.findAll)
  .post(companyController.create);

// Matches with "/api/tickets/:id"
router
  .route("/:id")
  .get(companyController.findById)
  .put(companyController.update)
  .delete(companyController.remove);

module.exports = router;
