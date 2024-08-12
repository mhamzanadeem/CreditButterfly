import React, { forwardRef } from "react";
import { Box, TextField } from "@mui/material";

const CommonTextField = forwardRef(({ req_width,label, ...props }, ref) => {
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="small"
        color="success"
        sx={{
          background: "#F8FAFC",
          width: { xs: 250, lg: req_width || 560 }
        }}
        inputRef={ref} // Forward the ref to TextField
        {...props} // Forward all other props to TextField
      />
    </Box>
  );
});

export default CommonTextField;
