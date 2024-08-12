import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const ResetPasswordBox = ({ buttonText, to, type }) => {

  const handleClick = () => {
    
    window.open('/Home', '_blank');
  };

  return (
    <Button
      component={type ? "button" : RouterLink}
      to={type ? undefined : to}
      type={type}
      onClick={handleClick}
      sx={{
        backgroundColor: "#7dc12c",
        width: { xs: "100%", sm: 200, md: 350, lg: 560 },
        maxWidth: 560,
        color: "white",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#5a8d1a",
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

export default ResetPasswordBox;
