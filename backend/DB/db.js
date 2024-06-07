const mongoose = require("mongoose");
require('dotenv').config();  
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Use the environment variable

const todoSchema = mongoose.Schema({
  task: String,
  date: String,
  Completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
