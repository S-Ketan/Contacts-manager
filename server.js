const express = require("express");
const cors = require("cors"); // Import cors middleware
const errorHandler = require("./Middleware/ErrorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/DataBaseConnection");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDb();

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }));
// Add this line to enable CORS
app.use(express.json());

// Routes
app.use("/api/contacts", require("./Routes/ContactRoutes"));
app.use("/api/users", require("./Routes/UserRoutes"));

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

