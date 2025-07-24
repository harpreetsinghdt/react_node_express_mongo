// routes/products.js
const express = require("express");
const router = express.Router();
const { connect, ObjectId } = require("../db");
const { faker } = require("@faker-js/faker");

const mongoose = require("mongoose");
const User = require("../models/User");
const Post = require("../models/Post");

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

router.get("/seedPosts", async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      console.log("❌ No users found! Seed users first.");
      return;
    }

    const statuses = ["published", "draft", "archived"];
    const posts = [];
    const n = 50;
    for (let i = 0; i < n; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      posts.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        status: randomStatus,
        user: new ObjectId(randomUser._id),
      });
    }
    try {
      const res = await Post.insertMany(posts).catch((err) =>
        console.error("❌ Insert error:", err)
      );

      console.log("Posts inserted successfully!", res);
    } catch (error) {
      console.error("Error inserting posts:", error);
    }
    console.log(`✅ ${n} posts inserted successfully.`);
    res.json({
      message: `${n} posts seeded`,
    });
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
    res.status(500).json({ message: "Seeding failed", error: err });
  }
});

router.get("/collections", async (req, res) => {
  const db = await connect();
  const collections = await db.listCollections().toArray();
  const list = collections.map((c) => c.name);
  console.log("Collections:", list);
  res.json({
    Collections: list,
  });
});

module.exports = router;
