import { TextField } from "@mui/material";
import useInputField from "../Hooks/useInputField";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputField("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          fullWidth
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
