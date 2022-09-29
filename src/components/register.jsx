import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import actionRegister from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  const signUp = (e) => {
    console.log({ user });
    dispatch(actionRegister(user));
  };

  return (
    <>
      <Container fixed>
        <Box
          sx={{
            padding: "1rem 0",
            width: "100%",
            height: "100vh",
          }}
        >
          <NavLink to="/">
            <Button variant="contained">LOGIN</Button>
          </NavLink>
          <Stack
            height="100%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <h3>Register</h3>
            <TextField
              required
              id="outlined"
              label="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              required
              id="outlined"
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              required
              id="outlined"
              label="Username"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button variant="outlined" onClick={signUp}>
              SIGN UP
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Register;
