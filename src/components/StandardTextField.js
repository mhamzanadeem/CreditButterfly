import { TextField } from "@mui/material";
import React from "react";

const StandardTextField = (width) => {
  return (
    <>
      <TextField id="standard-basic" variant="standard" color="success" sx={{width: width}}/>
    </>
  );
};

export default StandardTextField;
