// index.js
const express = require("express");
const connectDB = require("./db_mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
connectDB();

// Import routes
const seedsRouter = require("./routes/seed");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const postsRouter = require("./routes/posts");
const eloquentjavascriptRouter = require("./routes/eloquentjavascript");

// Use routes
app.use("/seed", seedsRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/posts", postsRouter);
app.use("/eloquentjavascript", eloquentjavascriptRouter);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", mesage: "Welcome to Mongodb Playground." });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
