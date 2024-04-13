import useList from "../hooks/useList";

export default function TaskList() {
  const [tasks, handleDelete, reset] = useList();

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
      <button onClick={reset}>Reset</button>
    </div>
  );
}
