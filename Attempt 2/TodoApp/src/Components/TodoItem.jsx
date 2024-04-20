import { CheckBox } from "@mui/icons-material";
import { ListItem, ListItemText } from "@mui/material";

export default function TodoItem({ id, task, completed }) {
  return (
    <>
      <ListItem key={id}>
        <CheckBox checked={completed} tabIndex={-1} />
        <ListItemText>{task}</ListItemText>
      </ListItem>
    </>
  );
}
