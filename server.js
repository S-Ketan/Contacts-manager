
const express = require("express");
const errorHandler = require("./Middleware/ErrorHandler");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/DataBaseConnection");

const PORT = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use("/api/contacts", require("./Routes/ContactRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
