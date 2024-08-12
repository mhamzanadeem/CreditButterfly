import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BackArrow = ({ to }) => {
  return (
    <Box
      component={RouterLink}
      to={ to }
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20, // Set your desired size
        height: 20,
        borderRadius: "50%", // Create a circular shape
        border: "2px solid #51A9B0", // Add a border
        position: "absolute",
        right: "1vw",
        top: "2vh",
        cursor:"pointer"
      }}
    >
      <ArrowBackRoundedIcon color="primary" />
    </Box>
  );
};

export default BackArrow;
