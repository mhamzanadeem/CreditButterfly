import React from "react";
import { Box, Typography } from "@mui/material";
import RedStar from "./RedStar.js";
import CommonTextField from "./CommonTextField.js";
import GreenBox from "./GreenBox.js";

const ForgotPassword1InputSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems:"Left",
        justifyContent:"Left",
        flexDirection: "column",
        textAlign:"Left",
        fontFamily: "Cairo", // Assuming Cairo is your preferred font family
        fontSize: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //alignItems: "flex-start",
          //justifyContent: "center",
          //textAlign: "center",
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            marginTop: "5vh",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Email address
          </Typography>
          <RedStar />
        </Box>
        <Box>
          <CommonTextField  />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "5vh",
        }}
      >
        <GreenBox buttonText="Reset Password" to="/ForgotPassword2" />
      </Box>
    </Box>
  );
};

export default ForgotPassword1InputSection;
