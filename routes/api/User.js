const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);


// router.get("/users", (req, res) => {
//   db.User.find({})
//     .then((dbUser) => {
//       res.json(dbUser);
//     })
//     .catch((err) => {
//       console.log(err);
//       //res.status(400).json(err);
//     });
// });

// router.get("/users/:userID", (req, res) => {
//     db.User.findById(req.params.userID)
//       .then((dbUser) => {
//         res.json(dbUser);
//       })
//       .catch((err) => {
//         console.log(err);
//         //res.status(400).json(err);
//       });
//   });

//   router.put("/users", ({ body }, res) => {
//     // Allow user to upload / create multiple users
//   if (Array.isArray(body)) {
//     db.User.insertMany(body)
//       .then((dbUser) => {
//         res.json(dbUser);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   } else {
//     //   Create one user
//     db.User.create(body)
//       .then((dbUser) => {
//         res.json(dbUser);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   }

// router.post("/users", ({ body }, res) => {
//     // Allow user to upload / create multiple users
//   if (Array.isArray(body)) {
//     db.User.insertMany(body)
//       .then((dbUser) => {
//         res.json(dbUser);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   } else {
//     //   Create one user
//     db.User.create(body)
//       .then((dbUser) => {
//         res.json(dbUser);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   }
// });
module.exports = router;
