import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Login() {
  const users = useSelector((state) => state.users);
  const user = users.map((user) => user.label);

  const userName = user.map((user) => user.name);
  const userPassword = user.map((user) => user.password);
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const Login = () => {
    const loga = user.find(
      (e) => e.userName === state.name && e.password === state.password
    );

    if (loga !== undefined) {
      console.log("LOGİN OLMUSUNUZ");
    } else {
      console.log("ZƏHMƏT OLMASA QEYDİYYATDAN KEÇİN!!!!");
    }
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
          <NavLink to="/register">
            <Button variant="contained">REGISTER</Button>
          </NavLink>
          <Stack
            height="100%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <h3>Login</h3>
            <TextField
              required
              id="filled"
              label="Username"
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <Button variant="outlined" onClick={Login}>
              Log in
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Login;
