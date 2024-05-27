import { AppBar, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
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
            <TodoForm />
            <TodoList />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TodoApp;
