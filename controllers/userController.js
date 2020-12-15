// Agent controller is where all the database calls are done
// This seperates the routes from the database code
const { Agent } = require("../models");
const db = require("../models");



// Defining methods for the agentController
module.exports = {
  login: function(req,res){
    console.log("controllers/userController/login  Authenticating");
    
      
  },
  findAll: function(req, res) {
    db.Agent
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    //console.log("userController/findById.req.params",req.params);
    db.Agent
      .findById({_id: req.params.id})
      .then(dbModel => { res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    
    const {username,password,emailAddress} = req.body;
    console.log("Controllers/userController/create", `Creating new user ${username} with password ${password}`);
    db.Agent
      .findOne({username},(err, agent)=> {
        if(err)
        res.status(500).json({message: {msgBody: `Error has occured ${err}`}})
        if(agent)
        res.status(500).json({message: {msgBody: `Username ${agent.username} is already taken`}})
        else{
          const newAgent = new Agent({username,password,emailAddress});
          newAgent.save(err=>{
            if(err)
              res.status(500).json({message: {msgBody: `Error has occured ${err}`}})
            if(agent)
              res.status(500).json({message: {msgBody: `Username ${agent.username} is already taken`}})
          })
        }
        //res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Agent
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Agent
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
