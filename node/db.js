// db.js
const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://harpreete87:mongo_flask_seed@cluster0.w8kvnta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
let db;

async function connect() {
  try {
    if (db) return db;
    await client.connect();
    db = client.db("fastapi_db"); // replace with your db name
    console.log("✅ Connected to MongoDB");
    return db;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

module.exports = { connect, ObjectId };
