import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

const WelcomeForgotPassword3 = () => {
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
        mb={5}
        sx={{ flexDirection: "column" }}
      >
        <Box >
          <Typography variant="h5" component="span" >
            Enter New
          </Typography>
          {"  "}
          <Typography variant="h5" component="span" color="#7DC12C">
            Password
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WelcomeForgotPassword3;
