const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  availableDates: [String],
  image: String,
});

module.exports = mongoose.model("Package", packageSchema);
