// routes/products.js
const express = require("express");
const router = express.Router();
const { connect } = require("../db");

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const products = await db.collection("products").find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to get products" });
  }
});

router.post("/", async (req, res) => {
  try {
    const db = await connect();
    const product = req.body;
    const result = await db.collection("products").insertOne(product);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

module.exports = router;
