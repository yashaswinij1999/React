import { TextField } from "@mui/material";
import useInputField from "../Hooks/useInputField";
import { RssFeed } from "@mui/icons-material";

export default function EditForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputField(task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          variant="standard"
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
