import { useState } from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function Review() {
  const [value, setValue] = useState(1);

  return (
    <>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}
