import React from "react";
import { Box, Typography } from "@mui/material";
import RedStar from "./RedStar.js";
import CommonTextField from "./CommonTextField.js";
import GreenBox from "./GreenBox.js";

const ForgotPassword3InputSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Cairo", // Assuming Cairo is your preferred font family
        fontSize: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 2,
        }}
      >
        <Box >
          <Typography variant="subtitle3" component="span">
            Email address
          </Typography>
          <RedStar />
        </Box>
        <CommonTextField width="100%" maxWidth="560px" />

        <Box >
          <Typography variant="subtitle3" component="span">
            Password
          </Typography>
          <RedStar />
        </Box>
        <CommonTextField />
      </Box>
      <br />
      <br />
      <Box>
        <GreenBox buttonText={"Save and Log In"} to={"/Home"} />
      </Box>
    </Box>
  );
};

export default ForgotPassword3InputSection;
