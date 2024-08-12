import React, { useState } from "react";
import { Box, Typography, Link, TextField} from "@mui/material";
import GreenBox from "./GreenBox"; // Assuming GreenBox component is imported correctly

const ForgotPassword2InputSection = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return; // Accept only numeric values

    const newOtp = [...otp];
    newOtp[index] = value.charAt(value.length - 1); // Update the OTP digit
    setOtp(newOtp);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: 4,
          marginBottom: 2,
          gap: { xs: 1, sm: 2, md: 3 },
        
        }}
      >
        {otp.map((digit, index) => (
          <TextField
            key={index}
            id={`otp-${index}`}
            variant="standard"
            color="success"
            margin="dense"
            InputProps={{
              inputProps: {
                style: {
                  textAlign: "center",
                  fontSize: "1.5rem",

                },
                maxLength: 1,
                
              },
            }}
            sx={{
              width: "3rem",
              "@media (max-width: 600px)": {
                width: "3rem", // Smaller width on small screens
              },
              "@media (max-width: 400px)": {
                width: "2rem", // Even smaller width on very small screens
              },
            }}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
          />
        ))}
      </Box>
      <Box
        sx={{
          marginTop: "5vh",
        }}
      >
        <GreenBox buttonText="Verify" to="/ForgotPassword3" />
      </Box>
      <Box
        sx={{
          marginTop: "5vh",
        }}
      >
        <Typography variant="body2">
          Did not receive the code?{" "}
          <Link href="#" onClick={() => console.log("Resend OTP")}>
            Resend OTP
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword2InputSection;
