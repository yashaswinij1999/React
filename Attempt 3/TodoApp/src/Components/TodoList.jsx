import React, { useContext, useState } from "react";
import { stateContext } from "../Hooks/Context";
import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
} from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";
import useToggle from "../Hooks/useToggle";
import EditFrom from "./EditFrom";

function TodoList() {
  const { state, dispatch } = useContext(stateContext);
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <>
      <Paper>
        <List>
          {isEditing ? (
            <EditFrom />    
          ) : (
            state.map((el, index) => (
              <>
                <ListItem key={el.id}>
                  <Checkbox checked={el.completed} />
                  <ListItemText
                    style={{
                      textDecorationLine: el.completed ? "line-through" : null,
                    }}
                  >
                    {el.task}
                  </ListItemText>
                  <IconButton
                    style={{ margin: "0 1rem" }}
                    onClick={() => removeItem(el.id)}
                  >
                    <DeleteOutline />
                  </IconButton>
                  <IconButton onClick={toggleIsEditing}>
                    <Edit />
                  </IconButton>
                </ListItem>
                {index < state.length - 1 && <Divider />}
              </>
            ))
          )}
        </List>
      </Paper>
    </>
  );
}

export default TodoList;
