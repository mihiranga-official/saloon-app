import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = () => {
  return (
    <div clssName="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className = "input">
        <TextField id="outlined-basic" label="User Name" variant="outlined" />
        </div>
        <div className = "input">
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        
        <Button variant="contained">Login</Button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Login;
