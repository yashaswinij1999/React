import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useTodoState(initialValue) {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (newTodo) => {
      setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
    },
    toggleTodo: (id) => {
      const toggle = todos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      );
      setTodos(toggle);
    },
    removeTodo: (id) => {
      const remove = todos.filter((el) => el.id !== id);
      setTodos(remove);
    },
    editTodo: (id, newTodo) => {
      const updatedTodo = todos.map((el) =>
        el.id === id ? { ...el, task: newTodo, completed: false } : el
      );
      setTodos(updatedTodo);
    },
  };
}
