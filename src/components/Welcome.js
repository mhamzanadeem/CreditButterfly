import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Welcome = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fonWeight: 700,
      fontStyle: "normal",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h5" component="span" sx={{ marginRight: 1  , fontSize: { xs: 25, md: 40 },}}>
            Welcome to
          </Typography>
          <Typography variant="h5" component="span" sx={{ color: "#7dc12c" ,fontSize: { xs: 25, md: 40 },}}>
            Credit
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="span" sx={{ color: "#7dc12c", fontSize: { xs: 25, md: 40 },}}>
            Butterfly!
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Welcome;
