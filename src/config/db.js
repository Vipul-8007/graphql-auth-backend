const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Connect MongoDB
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.log("DB Connected error:", err.message);
    process.exit(1); // Stop app if DB fails
  }
};

module.exports = connectDB;
