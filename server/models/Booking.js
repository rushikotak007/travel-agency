const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  travelers: Number,
  specialRequests: String,
  packageId: String,
  totalPrice: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);
