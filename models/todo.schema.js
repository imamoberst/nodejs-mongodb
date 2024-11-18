const { model, Schema, models } = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = models.Todo || model("Todo", todoSchema);
