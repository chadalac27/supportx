// Company controller is where all the database calls are done
//This seperates the routes from the database code
const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the CompanyController
module.exports = {
  findAll: function (req, res) {
    db.Company.find(req.query)
      .sort({ date: -1 })
      .populate("owner", ["_id", "username", "firstName"])
      .populate("managers.managerID", ["_id", "username", "firstName"])
      .populate("agents.agentID", ["_id", "username", "firstName"])
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Company.findById(req.params.id)
      .populate("owner", ["_id", "username", "firstName"])
      .populate("managers.managerID", ["_id", "username", "firstName"])
      .populate("agents.agentID", ["_id", "username", "firstName"])
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    var query = {};

    //If the request is not formatted correct it will not even try
    if (req.params.id) {
      query = {
        $or: [
          { owner: req.params.id },
          { agents: { $elemMatch: { agentID: req.params.id } } },
          { managers: { $elemMatch: { managerID: req.params.id } } },
        ],
      };

      db.Company.find(query)
        .populate("owner", ["_id", "username", "firstName"])
        .populate("managers.managerID", ["_id", "username", "firstName"])
        .populate("agents.agentID", ["_id", "username", "firstName"])
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    }
  },
  create: function (req, res) {
    db.Company.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Company.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Company.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
