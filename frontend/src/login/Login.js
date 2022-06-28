import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";

function Login(props) {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await login(formState).then((res) => {
      localStorage.setItem("token", res.data.token);
    });

    navigate("/home");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        name="username"
        label="username"
        variant="outlined"
        onChange={handleChange}
        value={formState.username}
      />
      <TextField
        id="filled-basic"
        name="password"
        label="password"
        variant="filled"
        onChange={handleChange}
        value={formState.password}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default Login;
