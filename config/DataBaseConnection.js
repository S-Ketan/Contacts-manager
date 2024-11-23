const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTING_STRING);
    console.log(
      `MongoDB connected: ${connect.connection.host} and ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;