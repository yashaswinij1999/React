import React, { useContext } from "react";
import { stateContext } from "../Hooks/Context";
import { Divider, List, ListItem, Paper } from "@mui/material";

function TodoList() {
  const { state } = useContext(stateContext);

  return (
    <>
      <Paper>
        <List>
          {state.map((el) => (
            <ListItem key={el.id}>{el.task}</ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
}

export default TodoList;
