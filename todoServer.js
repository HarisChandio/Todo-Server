
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let todos = [];

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  let todo = todos.find(
    (requestedTodo) => requestedTodo.id === parseInt(req.params.id)
  );
  if (!todo) {
    res.status(404).json({
      message: "coulnt find the todo",
    });
  }
  res.status(200).json(todo);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 100),
    title: req.body.title,
    description: req.body.description,
    //completed : req.body.todoStatus
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  let todoIndex = todos.findIndex(
    (requestedTodo) => requestedTodo.id === parseInt(req.params.id)
  );
  if (todoIndex === -1) {
    res.status(404).json({
      message: "not found",
    });
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    todos[todoIndex].completion = req.body.completion;
    res.status(200).json(todos[todoIndex]);
  }
});


app.delete("/todos/:id", (req, res)=>{
    const todoIndex = todos.findIndex((requestedTodo) => requestedTodo.id === parseInt(req.params.id));
    if(todoIndex == -1){
        res.status(404).json({
            message: "todo not found"
        })
    }
    else{
        todos.splice(todoIndex, 1);
        res.status(200).json({
            message: "todo deleted"
        })
    }
})

module.exports = app;
