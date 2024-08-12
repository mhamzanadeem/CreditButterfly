import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Title = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["AmpleSoft Pro"],
      fontSize: 20,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        alignItems="centre"
        justifyContent="center"
        textAlign={"center"}
        sx={{ flexDirection: "column" }}
      >
        <Box>
          <Typography variant="h5" component="span">
            Forgot
          </Typography>
          {"  "}
          <Typography variant="h5" component="span" color="#7DC12C">
            Password
          </Typography>
        </Box>
        <br />
        <Typography
          variant="subtitle1"
          component="span"
          sx={{ fontFamily: "Cairo", fontSize: 15 }}
        >
          Please enter your email address and we will send you a code for
          password reset.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Title;
