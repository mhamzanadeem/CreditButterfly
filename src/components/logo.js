import React from "react";
import Logo_pic from "../assets/white 1.png";
import Box from "@mui/material/Box";
const logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        marginTop:{xs: '14vw', md: '0' },
        marginBottom: { xs: '14vw', md: '2vw' },
        marginLeft: { xs: '15vw', md: '0' },
        '& img': {
                width: { xs: '40vw', md: 'auto' }, 
                height:{ xs: '15vw', md: 'auto' }, 
              },
      }}
    >
      <img
        src={Logo_pic}
        alt="Background"
      />
    </Box>
  );
};

export default logo;
