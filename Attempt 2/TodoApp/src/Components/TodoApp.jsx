import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "./TodoList";
import { useState } from "react";
import TodoForm from "./TodoForm";

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

export default function TodoApp() {
  const [todos, setTodos] = useState(data);

  function addTodo(todo) {
    const newTodo = [...todos, { id: 4, task: todo, completed: false }];
    setTodos(newTodo);
    console.log(todos);
  }

  return (
    <>
      <Paper
        variant="outlined"
        style={{ width: "100vw", height: "100vh", padding: 0, margin: 0 }}
        elevation={0}
      >
        <AppBar position="static" color="primary" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color={"inherit"}>Todo</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent={"center"} style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList data={todos} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
