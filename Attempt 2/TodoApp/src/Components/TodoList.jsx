import { List, ListItem, ListItemText, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, removeTodo, editTodo }) {
  return (
    <>
      <Paper>
        <List>
          {todos.map((el, i) => (
            <>
              <TodoItem
                id={el.id}
                task={el.task}
                completed={el.completed}
                key={el.id}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
              />
            </>
          ))}
        </List>
      </Paper>
    </>
  );
}
