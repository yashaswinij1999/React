import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialData = [
    { id: 1, task: "buy milk", completed: true },
    { id: 2, task: "sleep well", completed: false },
  ];

  const [data, setData] = useState(initialData);

  function addTodo(todo) {
    const newData = [...data, { id: uuidv4(), task: todo, completed: false }];
    setData(newData);
  }

  function deleteTodo(id) {
    const filteredData = data.filter((el) => el.id !== id);
    console.log(filteredData);
    setData(filteredData);
  }

  function toggleTodo(id) {
    const toggle = data.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    setData(toggle);
  }

  function editTodo(id, val) {
    const updatedData = data.map((el) =>
      el.id === id ? { ...el, task: val } : el
    );
    console.log(updatedData);
  }

  return (
    <>
      <Paper
        style={{
          height: "100vh",
          padding: 0,
          margin: 0,
          backgroundColor: "#fafafa",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color={"inherit"}>TodoList</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent={"center"} marginTop={"1rem"}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              data={data}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleTodo={toggleTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TodoApp;
