const mongoose = require("mongoose");

const basketShema = mongoose.Schema({
  medicine: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Medicine'
  }],
  client: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Client'
  },
  total: {
    type: Number,
    default: 0
  }
});

const Basket = mongoose.model("Basket", basketShema);
module.exports = Basket;
