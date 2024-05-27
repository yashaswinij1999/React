import React, { useContext } from "react";
import { stateContext } from "../Hooks/Context";
import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { DeleteOutline, Edit } from "@mui/icons-material";

function TodoList() {
  const { state, dispatch } = useContext(stateContext);

  function removeItem(id) {
    dispatch({ type: "delete", payload: { id: id } });
  }

  return (
    <>
      <Paper>
        <List>
          {state.map((el, index) => (
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
                <IconButton>
                  <Edit />
                </IconButton>
              </ListItem>
              {index < state.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    </>
  );
}

export default TodoList;
