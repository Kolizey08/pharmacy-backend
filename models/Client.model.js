const mongoose = require("mongoose");

const clientShema = mongoose.Schema({
  name: String,
  wallet: Number,
  recipe: Boolean
});

const Client = mongoose.model("Client", clientShema);
module.exports = Client;
