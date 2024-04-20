import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Forms() {
  const [value, setValue] = useState("");

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>Text : {value}</h1>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        placeholder="name"
        autoFocus
        value={value}
        onChange={handleChange}
      />
    </>
  );
}
