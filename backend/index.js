const express = require("express");
const cors = require("cors");
const { todoinput } = require("./ZOD/zod");
const { Todo } = require("./DB/db");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const allTodo = await Todo.find({});
  res.json({
    Todo: allTodo,
  });
});

app.post("/create", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = todoinput.safeParse({
    id: createPayLoad.id,
    task: createPayLoad.task,
    date: createPayLoad.date,
    Completed: createPayLoad.Completed,
  });
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
    return;
  }

  // ADD IN THE DATABASE
  await Todo.create({
    id: createPayLoad.id,
    task: createPayLoad.task,
    date: createPayLoad.date,
    Completed: createPayLoad.Completed,
  });
  res.json({
    msg: "Todo Created!",
  });
});

app.listen(3000);
