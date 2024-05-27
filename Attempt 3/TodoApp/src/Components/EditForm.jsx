import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import { TextField } from "@mui/material";

function EditForm({ id, task, completed }) {
  const [state, setState] = useState(task);

  return (
    <>
      <form>
        <TextField
          id="standard-basic"
          variant="standard"
          fullWidth
          label="add Todo"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </form>
    </>
  );
}

export default EditForm;
