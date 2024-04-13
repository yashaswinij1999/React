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

export default function TaskList() {
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

  const handleChange = function () {
    localStorage.setItem("tasks", JSON.stringify(initialData));
    console.log(localStorage);
    setTasks(initialData);
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task}{" "}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks found.</p>
      )}
      <button onClick={handleChange}>Reset</button>
    </div>
  );
}
