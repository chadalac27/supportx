const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {type: String, trim: true, required: true},
  owner: { type: Schema.Types.ObjectId, ref: "Agent", required: true },
  managers: [{ type: Schema.Types.ObjectId, ref: "Agent"} ],
  agents: [{ type: Schema.Types.ObjectId, ref: "Agent"} ],
  seats: { type: Number, default: 3},
  avatarURL: {type: String},
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
