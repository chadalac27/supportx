var db = require("../models");
const router = require("express").Router();

router.get("/ticket", (req,res)=>{
    console.log("hit me" )
    db.Ticket.find({})
    .then((dbTicket) => {
        res.json(dbTicket)
    })
    .catch((err) => {
        console.log(err);
      //res.status(400).json(err);
    });
  })

  router.post("/ticket", ({ body }, res) => {
    db.Ticket.create(body)
        .then(dbTicket => {
            res.json(dbTicket)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
  module.exports = router;