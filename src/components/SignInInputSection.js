import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import RedStar from "./RedStar";
import CommonTextField from "./CommonTextField";
import GreenBox from "./GreenBox";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignInInputSection = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email("Please fill correct email id")
      .required("Please provide your email id"),
    password: yup
      .string()
      .required("Please Fill your password")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
        "Password must be 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("form submit", data); // Log the email value
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)} // Add the onSubmit handler here
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        fontFamily: "Cairo",
        fontSize: 12,
      }}
    >
      <Box textAlign={"left"}>
        <Typography variant="subtitle2" component="span">
          Email address
        </Typography>
        <RedStar />
        <CommonTextField
          label={"xyz@gmail.com"}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
      </Box>
      <Box textAlign={"left"}>
        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="subtitle2" component="span">
            Password
          </Typography>
          <RedStar />
        </Box>
        <CommonTextField
          label={""}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
      </Box>
      <Box
        sx={{
          marginTop: "2vh",
          marginBottom: "2vh",
        }}
      >
        <Checkbox
          {...register("remember")}
          size="small"
          color="success"
          sx={{ padding: 0, margin: "-2px" }}
        />
        <Typography
          variant="subtitle2"
          component="span"
          sx={{
            marginLeft: { xs: 1, md: 2 },
            marginRight: { xs: 4, md: 2, lg: 38 },
            fontSize: { xs: 12, md: 14 },
          }}
        >
          Remember Password
        </Typography>
        <Link to="/ForgotPassword1">Forgot Password</Link>
      </Box>
      <Box
        sx={{
          marginBottom: 2,
        }}
      >
        <GreenBox buttonText="Sign In" to="/Home" type="submit" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Typography variant="subtitle2" component="span" mr={1}>
          Don't have an Account?
        </Typography>
        <Link to="/SignUp">Sign Up Today</Link>
      </Box>
      <DevTool control={control} /> {/* Place DevTool inside the form */}
    </Box>
  );
};

export default SignInInputSection;
