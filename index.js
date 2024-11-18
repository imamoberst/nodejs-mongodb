const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./database/db");
const todoSchema = require("./models/todo.schema");

connectDB();

app.use(express.json());

app.get("/todos", async (req, res) => {
  console.log("kok");
  const todos = await todoSchema.find();
  res.send({
    success: true,
    message: "success",
    result: todos,
  });
});

app.get("/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await todoSchema.findById(todoId);
    res.send({
      success: true,
      message: "success",
      result: todo,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error",
      result: error,
    });
  }
});

app.patch("/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await todoSchema.findByIdAndUpdate(todoId, req.body);
    res.send({
      success: true,
      message: "success",
      result: todo,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error",
      result: error,
    });
  }
});

app.delete("/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await todoSchema.findByIdAndDelete(todoId);
    res.send({
      success: true,
      message: "success",
      result: todo,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error",
      result: error,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/todos", async (req, res) => {
  const todo = await todoSchema.create(req.body);
  res.send({
    success: true,
    message: "success",
    result: todo,
  });
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
