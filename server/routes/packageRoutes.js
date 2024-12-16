const express = require("express");
const { getPackages } = require("../controllers/packageController");
const { createBooking } = require("../controllers/packageController");

const router = express.Router();

// GET route to fetch all packages
router.get("/packages", getPackages);
router.post("/bookings", createBooking);

module.exports = router;
