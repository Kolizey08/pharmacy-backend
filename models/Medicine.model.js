const mongoose = require("mongoose");

const medicineShema = mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category'
  },
  recipe: Boolean
});

const Medicine = mongoose.model("Medicine", medicineShema);
module.exports = Medicine;
