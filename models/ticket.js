const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  agents: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  sevarity: {type: Number, default: 0},
  title: {type:String, required: true},
  messages: [
    {
      message: { type: String, required: true },
      timeStamp: { type: Date, default: () => new Date() },
      senderName: {type: String, required: true},
    },
  ],
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
