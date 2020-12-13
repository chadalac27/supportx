const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  agents: [{ _id: false, type: Schema.Types.ObjectId, ref: "Agent"} ],
  companyID: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  severity: {type: Number, default: 0},
  title: {type:String, required: true},
  messages: [
    {
      _id: false,
      message: { type: String, required: true },
      timeStamp: { type: Date, default: () => new Date() },
      senderName: {type: String, required: true},
    },
  ],
  channel: {type:String, required: true}
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
