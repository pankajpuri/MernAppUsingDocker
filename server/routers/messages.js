const { Message } = require("../models/message");
const { checkMessageValidation } = require("../validation/validation");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});
router.post("/", async (req, res) => {
  const { error } = await checkMessageValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const message = await new Message({
    message: req.body.message,
  });
  message.save();
  res.send(message);
});

module.exports = router;
