// index.js
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const { faker } = require("@faker-js/faker");

const app = express();
const PORT = 3000;

// MongoDB URL & DB
const MONGO_URI =
  "mongodb+srv://harpreete87:mongo_flask_seed@cluster0.w8kvnta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB_NAME = "fastapi_db";

let db;

// Connect to MongoDB once
MongoClient.connect(MONGO_URI)
  .then((client) => {
    db = client.db(DB_NAME);
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Seed 100 users
app.get("/seed-users", async (req, res) => {
  try {
    const usersCollection = db.collection("users");

    // Clear existing users
    // await usersCollection.deleteMany({});

    // Create 100 fake users
    const users = Array.from({ length: 100 }).map(() => ({
      _id: new ObjectId(),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.internet.email(),
      age: faker.number.int({ min: 18, max: 60 }),
      mobile: faker.phone.number("647-###-####"),
      gender: faker.helpers.arrayElement(["male", "female"]),
    }));

    const result = await usersCollection.insertMany(users);
    res.json({
      message: "100 users seeded",
      insertedCount: result.insertedCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Seeding failed" });
  }
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", mesage: "Welcome to Mongodb Playground." });
});

app.get("/users", async (req, res) => {
  const usersCollection = db.collection("users");
  const result = await usersCollection.find().toArray();

  res.status(200).json({
    status: "success",
    message: "output successfully.",
    "total records": result.length,
    data: result,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
