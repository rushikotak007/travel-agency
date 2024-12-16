const Package = require("../models/Package");
const Booking = require("../models/Booking");

// Fetch all packages
exports.getPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
};

// Create a booking
exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};
