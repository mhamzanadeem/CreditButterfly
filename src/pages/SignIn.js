import React from "react";
import { Box } from "@mui/material";
import Logo from "../components/logo.js";
import Welcome from "../components/Welcome.js";
import Title from "../components/TitleSignIn.js";
import SignInInputSection from "../components/SignInInputSection.js";
import Rectangle from "../assets/Rectangle.png";

const SignIn = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {/* the left side of page */}
      <Box
        bgcolor="#0A0629"
        flex={1} // Adjust flex property for responsiveness
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: `url(${Rectangle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
          padding: { xs: "20px", md: "0" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Logo />
          <Welcome />
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
        sx={{ padding: { xs: '20px', md: '0' } }}
      >
        <Box>
          <Title />
          <SignInInputSection />
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
