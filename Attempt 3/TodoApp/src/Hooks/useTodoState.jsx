import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodoState(initialData) {
  const [data, setData] = useState(initialData);

  return {
    data,
    addTodo: (todo) => {
      setData([...data, { id: uuidv4, task: todo, completed: false }]);
    },
    deleteTodo: (id) => {
      setData(data.filter((el) => el.id !== id));
    },
    toggleTodo: (id) => {
      setData(
        data.map((el) =>
          el.id === id ? { ...el, completed: !el.completed } : el
        )
      );
    },
    editTodo: (id, val) => {
      setData(data.map((el) => (el.id === id ? { ...el, task: val } : el)));
    },
  };
}

export default useTodoState;
