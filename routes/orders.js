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

router.put("/renameField", async (req, res) => {
  try {
    const db = await connect();

    console.log(req.body);
    const { current_field, new_name } = req.body;
    const query = { [current_field]: new_name };
    console.log(query);

    let result = await db
      .collection("orders")
      .updateMany({}, { $rename: query });

    result += `Modified ${result.modifiedCount} documents`;

    res.status(200).json({
      status: "success",
      message: "Data deleted successfully.",
      body: req.body,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
});

router.put("/addField", async (req, res) => {
  try {
    const db = await connect();

    const statuses = ["completed", "in progress", "new"];

    const result = await db
      .collection("orders")
      .find()
      .forEach(function (doc) {
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];
        db.collection("orders").updateOne(
          { _id: doc._id },
          { $set: { status: randomStatus } }
        );
      });

    res.status(200).json({
      status: "success",
      message: "Field added successfully.",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update" });
  }
});

router.get("/getAggregate", async (req, res) => {
  try {
    const db = await connect();

    const result = await db
      .collection("orders")
      .aggregate([
        { $match: { status: "completed" } },
        { $group: { _id: "$user_id", totalAmount: { $sum: "$amount" } } },
      ])
      .toArray();

    res.status(200).json({
      status: "success",
      message: "Data fetched successfully.",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to get", error: err.message });
  }
});

module.exports = router;
