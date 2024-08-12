import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Butterfly from "../assets/butterfly.png";

const TitleSignIn = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["AmpleSoft Pro"],
      fontSize: 25,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        //alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: "column" }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "Left" },
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: { xs: 16, md: 40 },
              textAlign: { xs: "centre", md: "Left" },
            }}
          >
            Sign in with your
          </Typography>
          {"  "}
          <Typography
            variant="h6"
            component="span"
            color="#7DC12C"
            sx={{
              fontSize: { xs: 16, md: 40 },
            }}
          >
            Credit Butterfly!
          </Typography>
          <img src={Butterfly} alt="Background" />
          <br />

          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: { xs: 16, md: 40 },
            }}
          >
            account
          </Typography>
        </Box>
        <Box>
          <br />
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              whiteSpace: "nowrap",
              fontFamily: "Cairo",
              fontSize: { xs: 16, md: 20 },
              textAlign: { xs: "left", sm: "center" },
            }}
          >
            Enter your email and password below
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default TitleSignIn;
