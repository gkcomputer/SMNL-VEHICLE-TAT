import { Label } from "@mui/icons-material";
import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import CustomMuiTypoGraphy from "../../customComponents/muiTypography/CustomMuiTypoGraphy";
import { useState } from "react";

const LoginForm = ({ sx }) => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("userLoginDetails", userLoginDetails);
  };

  return (
    <form style={sx} onSubmit={handleSubmit}>
      <CustomMuiTypoGraphy variant="body1">User Name</CustomMuiTypoGraphy>
      <TextField
        id="username"
        placeholder="Enter your user name"
        variant="standard"
        name="username"
        onChange={(e) => {
          handleChange(e);
        }}
        value={userLoginDetails.username}
      />
      <CustomMuiTypoGraphy variant="body1">Password</CustomMuiTypoGraphy>
      <TextField
        id="password"
        placeholder="Enter your password"
        variant="standard"
        name="password"
        onChange={(e) => {
          handleChange(e);
        }}
        value={userLoginDetails.password}
        type="password"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setUserLoginDetails({ username: "", password: "" });
        }}
      >
        Cancel
      </Button>
    </form>
  );
};
export default LoginForm;
