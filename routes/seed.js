// routes/products.js
const express = require("express");
const router = express.Router();
const { connect, ObjectId } = require("../db");
const { faker } = require("@faker-js/faker");

// Seed 100 users
router.get("/users", async (req, res) => {
  try {
    const db = await connect();
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
    const usersCount = await usersCollection.countDocuments();
    res.json({
      message: "100 users seeded",
      insertedCount: result.insertedCount,
      usersCount: usersCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Seeding failed" });
  }
});

module.exports = router;
