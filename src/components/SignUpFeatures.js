import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "./CheckCircle.js";

const SignUpFeatures = () => {
  return (
    <Box mr={15} sx={{ mr: { md: 15, xs: 0 } }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <CheckIcon />
        <Typography
          variant="subtitle1"
          component="span"
          ml={1}
          sx={{ fontSize: { xs: 14, md: 20 }, whiteSpace: "nowrap" }}
        >
          Change to 30 Day Money Back Guarantee
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <CheckIcon />
        <Typography
          variant="subtitle1"
          component="span"
          ml={1}
          sx={{ fontSize: { xs: 14, md: 20 }, whiteSpace: "nowrap" }}
        >
          Customized Credit Action Plans
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <CheckIcon />
        <Typography
          variant="subtitle1"
          component="span"
          ml={1}
          sx={{ fontSize: { xs: 14, md: 20 }, whiteSpace: "nowrap" }}
        >
          Powered By AI
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <CheckIcon />
        <Typography
          variant="subtitle1"
          component="span"
          ml={1}
          sx={{ fontSize: { xs: 14, md: 20 }, whiteSpace: "nowrap" }}
        >
          Unique letters, Every time
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <CheckIcon />
        <Typography
          variant="subtitle1"
          component="span"
          ml={1}
          sx={{ fontSize: { xs: 14, md: 20 }, whiteSpace: "nowrap" }}
        >
          Pay as you go credits
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpFeatures;
