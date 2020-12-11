const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");
const passportConfig = require("../../passport");
const JWT = require("jsonwebtoken");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "Boom Boom",
      sub: userID,
    },
    "dream d86!rS[gohn-LYL!VEt@6PS$bA Love",
    { expiresIn: "2h" }
  );
};

router.post(
  "/login",
  passport.authenticate("local", { session: true }),
  (req, res) => {
    console.log("Inside Auth");
    if (req.isAuthenticated()) {
      console.log("User Was Authenticated");
      const { _id, username } = req.user;
      const token = signToken(_id);
      console.log("Creating Cookie");
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username } });
    } else {
      console.log("Failled To Authenticate!");
      res.status(400).json({ isAuthenticated: false });
    }
  }
);

// Matches with "/api/users"
router.route("/").get(userController.findAll).post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
