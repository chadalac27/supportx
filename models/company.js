const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {type: String, trim: true, required: true},
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  managers: [{ managerID: { type: Schema.Types.ObjectId, ref: "User"} }],
  agents: [{ agentID: { type: Schema.Types.ObjectId, ref: "User"} }],
  seats: { type: Number, default: 3},
  //tickets: [{ ticketID: { type: Schema.Types.ObjectId, ref: "Ticket"} }],
  avatarURL: {type: String},
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
