import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Butterfly from "../assets/butterfly.png";

const TitleSignUp = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: 20,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <p>
      
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ flexDirection: "column" }}
        >
          <Box
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: { xs: 16, md: 40 },
              }}
            >
              Create your
            </Typography>{" "}
            <Typography
              variant="h5"
              component="span"
              sx={{ color: "#7dc12c", fontSize: { xs: 16, md: 40 } }}
            >
              Credit Butterfly!
            </Typography>
            <img
              src={Butterfly}
              alt="Butterfly"
              style={{ maxWidth: "100%", marginTop: 10 }}
            />{" "}
            <br />
            <Typography
              variant="h5"
              component="span"
              sx={{
                fontSize: { xs: 16, md: 40 },
              }}
            >
              account
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              component="span"
              sx={{ fontFamily: "Cairo", fontSize: 18}}
            >
              Join thousands of others using Credit Butterfly!
            </Typography>
          </Box>
        </Box>
        
      </p>
    </ThemeProvider>
  );
};

export default TitleSignUp;
