var db = require("../models");
const router = require("express").Router();


router.get("/users", (req, res) => {
    db.User.find({})
        .then((dbUser) => {
            res.json(dbUser)
        })
        .catch((err) => {
            console.log(err);
            //res.status(400).json(err);
        });
})

router.post("/users", ({ body }, res) => {
    db.User.create(body)
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router;