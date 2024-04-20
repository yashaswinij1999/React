import { List, ListItem, ListItemText, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ data }) {
  return (
    <>
      <Paper>
        <List>
          {data.map((el) => (
            <TodoItem id={el.id} task={el.task} completed={el.completed} />
          ))}
        </List>
      </Paper>
    </>
  );
}
