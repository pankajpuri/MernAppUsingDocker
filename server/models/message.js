const mongoose = require("mongoose");

const messageschema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});
const Message = mongoose.model("Message", messageschema);

exports.Message = Message;
exports.messageschema = messageschema;
