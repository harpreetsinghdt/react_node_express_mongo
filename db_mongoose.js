const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://harpreete87:mongo_flask_seed@cluster0.w8kvnta.mongodb.net/fastapi_db?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected with Mongoose");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
