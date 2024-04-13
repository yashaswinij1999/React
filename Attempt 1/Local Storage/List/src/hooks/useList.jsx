import React, { useEffect, useState } from "react";

const initialData = [
  {
    id: 1,
    task: "buy milk",
  },
  {
    id: 2,
    task: "study",
  },
  {
    id: 3,
    task: "help others in daily chores",
  },
  {
    id: 4,
    task: "buy groceries",
  },
];

export default function useList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks =
      JSON.parse(localStorage.getItem("tasks")) || initialData;
    return storedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const reset = function () {
    localStorage.setItem("tasks", JSON.stringify(initialData));
    setTasks(initialData);
  };

  return [tasks, handleDelete, reset];
}
