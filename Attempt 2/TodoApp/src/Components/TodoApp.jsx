import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const data = [
    { id: 1, task: "buy eggs", completed: true },
    {
      id: 2,
      task: "clean floor",
      completed: false,
    },
    {
      id: 3,
      task: "study ",
      completed: false,
    },
  ];

  const intialData = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(intialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    const newTodo = [...todos, { id: uuidv4(), task: todo, completed: false }];
    setTodos(newTodo);
    console.log(todos);
  }

  function ToggleTodo(id) {
    const toggle = todos.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    console.log(toggle);
    setTodos(toggle);
  }

  function removeTodo(id) {
    const updatedTodo = todos.filter((el) => el.id !== id);
    setTodos(updatedTodo);
  }

  function editTodo(id, newTodo) {
    const editedTodo = todos.map((el) =>
      el.id === id ? { ...el, task: newTodo } : el
    );
    console.log(editedTodo);
    setTodos(editedTodo);
  }

  return (
    <>
      <Paper
        variant="outlined"
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar position="static" color="primary" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">Todo</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent={"center"} style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              ToggleTodo={ToggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
