import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const WelcomeForgotPassword2 = () => {
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
        alignItems="center"
        justifyContent="center"
        textAlign={"center"}
        sx={{ flexDirection: "column" }}
      >
        <Box >
          <Typography variant="h5" component="span">
            Enter Verification
          </Typography>
          {"  "}
          <Typography variant="h5" component="span" color="#7DC12C">
            Code
          </Typography>
        </Box>
        <br />
        <br />
        <br />
        <Typography
          variant="subtitle1"
          component="span"
          sx={{ fontFamily: "Cairo", fontSize: 15 }}
        >
          Enter the verification code sent to your email address to reset your
          password!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default WelcomeForgotPassword2;
