// routes/orders.js
const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { connect } = require("../db");

router.get("/", async (req, res) => {
  try {
    const db = await connect();
    const orders = await db.collection("orders").find().toArray();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to get orders" });
  }
});

router.post("/", async (req, res) => {
  try {
    const db = await connect();
    const order = req.body;
    // Optionally, validate that userId and productIds are ObjectId
    if (order.userId) order.userId = new ObjectId(order.userId);
    if (order.productIds && Array.isArray(order.productIds)) {
      order.productIds = order.productIds.map((id) => new ObjectId(id));
    }
    const result = await db.collection("orders").insertOne(order);
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

module.exports = router;
