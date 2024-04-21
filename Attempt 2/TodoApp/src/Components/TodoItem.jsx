import { Delete, Edit } from "@mui/icons-material";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

export default function TodoItem({
  id,
  task,
  completed,
  ToggleTodo,
  removeTodo,
}) {
  return (
    <>
      <ListItem key={id}>
        <Checkbox
          checked={completed}
          tabIndex={-1}
          onClick={() => {
            ToggleTodo(id);
            console.log(id);
          }}
        />
        <ListItemText
          style={{ textDecorationLine: completed ? "line-through" : "none" }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="edit">
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
      </ListItem>
    </>
  );
}
