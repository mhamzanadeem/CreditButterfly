import React from "react";
import { Box } from "@mui/material";
import Group from "../assets/Group.png";
import Logo_pic from "../assets/black 1.png";
import Logo from "../assets/white 1.png";
import Title from "../components/WelcomeForgotPassword2.js";
import InputSection from "../components/ForgotPassword2InputSection.js";
import BackArrow from "../components/BackArrow.js";

const ForgotPassword2 = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {/* the left side of page */}
      <Box
        bgcolor="#0A0629"
        flex={1}
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: { xs: "20vh 0", md: "0" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Logo Picture */}
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            width: "50%", // Adjusted for mobile screen size
            height: "50%",
            display: { xs: "block", md: "none" },
            marginBottom: "10vh",
            marginLeft: "5vw",
          }}
        />

        {/* Background Picture */}
        <Box
          component="img"
          src={Group}
          alt="Background"
          sx={{
            width: { xs: "50%", md: "29.7vw" },
            height: { xs: "80%", md: "60.2vh" },
            display: "block",
          }}
        />
      </Box>

      {/* the right side of page */}

      <Box
        bgcolor="#ffff"
        flex={1}
        display="flex"
        flexDirection="column" // Align items in a column
        alignItems="center"
        sx={{ minHeight: "100vh" }} // Ensure the Box takes the full viewport height
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "5vh",
          }}
        >
          <Box
            component="img"
            src={Logo_pic}
            alt="Logo"
            sx={{
              width: "11.76vw",
              height: "6.67vh",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
        <BackArrow to="/ForgotPassword1" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // Ensure the Box takes the full width
            marginTop: {sm:"0", md:"15vh"}
          }}
        >
          <Title />
          <InputSection />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword2;
