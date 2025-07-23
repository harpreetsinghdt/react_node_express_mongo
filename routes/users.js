// routes/users.js
const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connect } = require("../db");

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const result = await db.collection("users").find().toArray();

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

router.post("/", async (req, res) => {
  try {
    const db = await connect();
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    res.status(201).json({ insertedId: result.insertedId, insertedData: user });
  } catch (err) {
    res.status(500).json({ message: "Failed to create user", error: err });
  }
});

module.exports = router;
