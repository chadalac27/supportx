var db = require("../models");
const router = require("express").Router();

router.get("/company", (req, res) => {
    console.log("hit me")
    db.Company.find({})
    
    .then((dbCompany) => {
        res.json(dbCompany)
        
    })
    .catch((err) => {
        console.log(err);
        //res.status(400).json(err);
    });
})

router.post("/company", ({ body }, res) => {
    db.Company.create(body)
        .then(dbCompany => {
            res.json(dbCompany)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router;