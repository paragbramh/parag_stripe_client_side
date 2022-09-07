import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import { createUserAction, loginUserAction } from "../actions";
import Input from "./Input";

const Signup = () => {
  const navigate = useNavigate();
  const [isSignup, setisSignup] = useState(true);
  const UserInit = { name: "", email: "", password: "", confirmPassword: "" };
  const [userdata, setuserdata] = useState(UserInit);

  const handleUserdata = async (e) => {
    e.preventDefault();
    isSignup
      ? createUserAction(userdata, navigate)
      : loginUserAction(userdata, navigate);
  };

  const handleAccounts = (e) => {
    setisSignup((prev) => !prev);
  };

  const tt = (e) =>
    setuserdata({ ...userdata, [e.target.name]: e.target.value });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        color: "black",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Box
        display="flex"
        flexShrink={2}
        alignContent="space-between"
        flexDirection="column"
        p={2}
        mb={3}
        sx={{
          borderRadius: "9px",
          fontSize: "0.8rem",
          width: "16%",
          alignSelf: "center",
          boxShadow: "8px 8px 8px lightgray",
          border: "1px solid lightgray",
        }}
      >
        <Typography sx={{ fontSize: "27px" }}>
          {isSignup ? "Create account" : "login"}
        </Typography>
        {isSignup ? (
          <form encType="multipart/form-data" onSubmit={handleUserdata}>
            <Input
              name="name"
              lable="Username"
              value={userdata.name}
              onChg={tt}
              ph="First and last name"
              type="text"
            />
            <Input
              name="email"
              lable="Email"
              value={userdata.email}
              onChg={tt}
              type="email"
            />
            <Input
              name="password"
              lable="Password"
              ph="at least 8 characters"
              value={userdata.password}
              onChg={tt}
              type="password"
            />
            <Input
              name="confirmPassword"
              lable="Comfirm Password"
              value={userdata.confirmPassword}
              onChg={tt}
              type="password"
            />
            <button
              onClick={handleUserdata}
              style={{
                marginTop: "1.4rem",
                width: "100%",
                height: "1.9rem",
                borderRadius: "8px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                background:
                  "linear-gradient(to bottom, transparent 0%,black 85% )",
              }}
            >
              Create account
            </button>
          </form>
        ) : (
          <form onSubmit={handleUserdata}>
            <Input
              name="email"
              lable="Email"
              value={userdata.email}
              onChg={tt}
              type="email"
            />
            <Input
              name="password"
              lable="Password"
              value={userdata.password}
              onChg={tt}
              type="password"
            />
            <button
              type="submit"
              style={{
                backgroundColor: "lightyellow",
                marginTop: "1.4rem",
                width: "100%",
                height: "1.8rem",
                borderRadius: "23px",
              }}
            >
              Login account
            </button>
          </form>
        )}
        <Box
          display="flex"
          pt={1}
          pl={2}
          mt={5}
          alignItems="center"
          flexShrink={2}
          sx={{
            borderTop: "2px solid lightgray",

            background:
              "linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            {isSignup ? "Already have an account ?" : "Create new account ?"}
          </Typography>
          <Button
            variant="text"
            onClick={handleAccounts}
            sx={{ textTransform: "none", height: "1rem", fontSize: "0.8rem" }}
          >
            <p>{isSignup ? "sign-In" : "sign-up"}</p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
