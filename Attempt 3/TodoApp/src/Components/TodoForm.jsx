import { Box, Paper, TextField } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { stateContext } from "../Hooks/Context";
import { v4 as uuidv4 } from "uuid";

function TodoForm() {
  const [inval, setInval] = useState("");
  const { dispatch } = useContext(stateContext);
  const inRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "Add",
      payload: { id: uuidv4(), task: inval, completed: false },
    });
    reset();
    inRef.current.focus();
  }

  function reset() {
    setInval("");
  }

  return (
    <>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }} elevation={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            variant="standard"
            fullWidth
            label="add Todo"
            value={inval}
            onChange={(e) => setInval(e.target.value)}
            ref={inRef}
          />
        </form>
      </Paper>
    </>
  );
}

export default TodoForm;
