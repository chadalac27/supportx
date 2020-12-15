const router = require("express").Router();
const openApiController = require("../../controllers/openApiController");

// Matches with "/api/open"
router.route("/")
  .get(openApiController.findAll)
  .post(openApiController.create);

// Matches with "/api/open/:id"
router
  .route("/:id")
  .get(openApiController.findById)
  .put(openApiController.update)
  .delete(openApiController.remove);


module.exports = router;
