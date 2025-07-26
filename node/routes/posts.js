// routes/users.js
const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connect } = require("../db");

const User = require("../models/User.js");
const Post = require("../models/Post.js");

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const result = await db.collection("posts").find().toArray();

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully.",
      "total records": result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get users" });
  }
});
router.get("/get_mongoose", async (req, res) => {
  try {
    const result = await Post.find().populate("user");

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully.",
      "total records": result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get users" });
  }
});
router.get("/find", async (req, res) => {
  try {
    const db = await connect();
    const { age_comp, age } = req.body;
    let comp;
    if (age_comp === "greater than") {
      comp = { $gt: age };
    } else if (age_comp === "less than") {
      comp = { $lt: age };
    } else {
      comp = age;
    }
    const result = await db.collection("users").find({ age: comp }).toArray();

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully.",
      "total records": result.length,
      body: req.body,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to get users" });
  }
});
router.put("/update", async (req, res) => {
  try {
    const db = await connect();
    console.log(req.body);
    const { condition_key, condition_val, field, value } = req.body;
    const query = { [condition_key]: condition_val };
    const update = { $set: { [field]: value } };
    const result = await db.collection("users").updateOne(query, update);

    res.status(200).json({
      status: "success",
      message: "Data upadted successfully.",
      body: req.body,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
});
router.delete("/", async (req, res) => {
  try {
    const db = await connect();
    console.log(req.body);
    const { condition_key, condition_val } = req.body;
    const query = { [condition_key]: condition_val };
    console.log(query);
    const result = await db.collection("users").deleteOne(query);

    res.status(200).json({
      status: "success",
      message: "Data deleted successfully.",
      body: req.body,
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const db = await connect();
    const user = req.body;
    const result = await db.collection("posts").insertOne(user);
    res.status(201).json({ insertedId: result.insertedId, insertedData: user });
  } catch (err) {
    res.status(500).json({ message: "Failed to insert post", error: err });
  }
});
router.post("/insert_mongoose", async (req, res) => {
  try {
    const user = req.body;

    const newUser = new User(user);
    await newUser.save();
    res.status(201).json({ insertedData: user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: err.message });
  }
});

module.exports = router;
