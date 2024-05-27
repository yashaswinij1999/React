import { DeleteForeverOutlined, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

import { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ id, task, completed, deleteTodo, editTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <ListItem key={id}>
        {isEditing ? (
          <EditForm
            id={id}
            task={task}
            completed={completed}
            editTodo={editTodo}
          />
        ) : (
          <>
            <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText>{task}</ListItemText>
            <ListItemSecondaryAction>
              <IconButton onClick={() => deleteTodo(id)}>
                <DeleteForeverOutlined />
              </IconButton>
              <IconButton onClick={() => setIsEditing(true)}>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
}

export default TodoItem;
