import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

import useToggle from "../Hooks/useToggle";
import EditForm from "./EditForm";

export default function TodoItem({
  id,
  task,
  completed,
  toggleTodo,
  removeTodo,
  editTodo,
}) {
  const [isEditing, toggleIsEditing] = useToggle(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => {
              toggleTodo(id);
              console.log(id);
            }}
          />
          <ListItemText
            style={{
              textDecorationLine: completed ? "line-through" : "none",
            }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="edit" onClick={toggleIsEditing}>
              <Edit />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                removeTodo(id);
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
