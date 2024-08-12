import React from "react";
import { Box } from "@mui/material";
import Logo from "../components/logo.js";
import Welcome from "../components/Welcome.js";
import Title from "../components/TitleSignUp.js";
import InputSection from "../components/input_section.js";
import Features from "../components/SignUpFeatures.js";
import Rectangle from "../assets/Rectangle.png";

const Signup = () => {
  return (
    <Box display="flex" height="100vh" flexDirection={{ xs: 'column', md: 'row' }}>
      {/* the left side of page */}
      <Box
        bgcolor="#0A0629"
        flex={1}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
          padding: { xs: '20px', md: '0' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box>
          <Logo />
          <Welcome />
          <Features />
        </Box>
      </Box>

      {/* the right side of page */}

      <Box
        bgcolor="#ffff"
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        sx={{ padding: { xs: '20px', md: '0' } }}
      >
        <Box>
          <Title />
          <InputSection />
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
