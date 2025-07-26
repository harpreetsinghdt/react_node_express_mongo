const mongoose = require("mongoose");
const User = require("../models/User");
const Post = require("../models/Post");
const { faker } = require("@faker-js/faker");

async function seedPosts() {
  try {
    const uri =
      "mongodb+srv://harpreete87:mongo_flask_seed@cluster0.w8kvnta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/fastapi_db";
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB");

    const users = await User.find();
    if (users.length === 0) {
      console.log("❌ No users found! Seed users first.");
      return;
    }

    const statuses = ["published", "draft", "archived"];
    const posts = [];

    for (let i = 0; i < 50; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomStatus =
        statuses[Math.floor(Math.random() * statuses.length)];

      posts.push({
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        status: randomStatus,
        user: randomUser._id,
      });
    }

    await Post.insertMany(posts);
    console.log("✅ 50 posts inserted successfully.");
  } catch (err) {
    console.error("❌ Error seeding posts:", err);
  } finally {
    await mongoose.disconnect();
  }
}

seedPosts();
