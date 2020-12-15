const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  agents: [{ _id: false, type: Schema.Types.ObjectId, ref: "Agent"} ],
  companyID: { type: Schema.Types.ObjectId, ref: "Company", required: [true,"CompanyID required to make a ticket"] },
  severity: {type: Number, default: 0},
  title: {type:String, required: [true, "Title required to make a ticket"]},
  messages: [
    {
      _id: false,
      message: { type: String, required: [true,"Message required to create ticket"] },
      timeStamp: { type: Date, default: () => new Date() },
      senderName: {type: String, required: [true, "Sender name required to create ticket"]},
    },
  ],
  channel: {type:String, required: true}
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
