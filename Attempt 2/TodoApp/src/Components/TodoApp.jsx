import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import useTodoState from "../Hooks/useTodoState";

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

  const intialData = JSON.parse(localStorage.getItem("todos") || data);
  const { todos, addTodo, toggleTodo, removeTodo, editTodo } =
    useTodoState(intialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
