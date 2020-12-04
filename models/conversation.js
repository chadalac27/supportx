const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  sevarity: {type: Number, default: 0},
  title: {type:String, required: true},
  messages: [
    {
      message: { type: String, required: true },
      timeStamp: { type: Date, default: () => new Date() },
      user: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
