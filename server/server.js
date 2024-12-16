const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Import routes
const packageRoutes = require("./routes/packageRoutes");

// Use routes
app.use("/api", packageRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI) // Dynamic URI from .env
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if MongoDB connection fails
  });

// Dynamic port selection
const PORT = process.env.PORT || 5001;

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle port conflicts or unexpected errors
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Please use a different port.`);
  } else {
    console.error("Server encountered an error:", err.message);
  }
  process.exit(1); // Exit process on error
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\nShutting down server...");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});
