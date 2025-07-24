// index.js
const express = require("express");
const connectDB = require("./db_mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

// Import routes
const seedsRouter = require("./routes/seed");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const postsRouter = require("./routes/posts");

// Use routes
app.use("/seed", seedsRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", mesage: "Welcome to Mongodb Playground." });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
