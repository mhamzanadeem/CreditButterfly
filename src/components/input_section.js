import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import RedStar from "./RedStar.js";
import CommonTextField from "./CommonTextField.js";
import GreenBox from "./GreenBox.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const InputSection = () => {
  const schema = yup.object({
    FirstName: yup.string().required("Please provide your first name"),
    LastName: yup.string().required("Please provide your last name"),
    email: yup
      .string()
      .email("Please fill correct email id")
      .required("Please provide your email id"),
    Company: yup.string().required("Please provide your company name"),
    PhoneNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be at most 15 digits")
      .required("Please provide your phone number"),
    password: yup
      .string()
      .required("Please fill your password")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
        "Password must be 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      email: "",
      Company: "",
      PhoneNumber: "",
      password: "",
      ConfirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("form submit", data); // Log the email value
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Cairo",
        fontSize: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            First name
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            label={"Your first name"}
            {...register("FirstName")}
            error={!!errors.FirstName}
            helperText={errors.FirstName ? errors.FirstName.message : ""}
          />
        </Box>
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Last name
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            label={"Your last name"}
            {...register("LastName")}
            error={!!errors.LastName}
            helperText={errors.LastName ? errors.LastName.message : ""}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Email address
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            label={"xyz@gmail.com"}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
        </Box>
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Company name (Optional)
          </Typography>
          <br />
          <CommonTextField
            req_width={250}
            {...register("Company")}
            error={!!errors.Company}
            helperText={errors.Company ? errors.Company.message : ""}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Phone Number
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            {...register("PhoneNumber")}
            error={!!errors.PhoneNumber}
            helperText={errors.PhoneNumber ? errors.PhoneNumber.message : ""}
          />
        </Box>
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Password
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            label={""}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
          }}
        >
          <Typography variant="subtitle3" component="span">
            Confirm Password
          </Typography>
          <RedStar />
          <br />
          <CommonTextField
            req_width={250}
            label={""}
            {...register("ConfirmPassword")}
            error={!!errors.ConfirmPassword}
            helperText={
              errors.ConfirmPassword ? errors.ConfirmPassword.message : ""
            }
          />
        </Box>
        <Box
          sx={{
            marginRight: { xs: "0vw", sm: "3vw" },
            textAlign: "left",
            visibility: "hidden",
          }}
        >
          <Typography variant="subtitle3" component="span">
            None
          </Typography>
          <RedStar />
          <br />
          <CommonTextField req_width={250} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Checkbox
          {...register("remember")}
          size="small"
          color="success"
          sx={{ padding: 0, margin: "-2px" }}
        />
        <Typography variant="subtitle3" component="span" ml={2}>
          By signing up you agree to the Credit Butterfly Terms of Use and
          Privacy Policy.
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <GreenBox buttonText={"Sign Up"} to={"/SignIn"} type="submit" />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="subtitle3" component="span" mr={1}>
          Already have an Account?
        </Typography>
        <Link to="/SignIn">Log In</Link>
      </Box>
      <DevTool control={control} /> {/* Place DevTool inside the form */}
    </Box>
  );
};

export default InputSection;
