import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SignUpBackground from "../Image/SignUpBackground.svg";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${SignUpBackground})`,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50vw",
            height: "70vh",
            backgroundColor: "#EDB046",
            boxShadow: "4px 4px 16px 0px #0000001A",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#FFFFFF",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              To-Do App
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Start organizing your life day by day
            </div>
            <form style={{ width: "35vw", marginTop: "5vh" }}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  "& fieldset": { border: "none" },
                  width: "100%",
                  marginLeft: "1.5%",
                  boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.1)",
                  marginBottom: "20px",
                }}
              />
              <Box>
                <FormControl
                  sx={{
                    m: 1,
                    width: "100%",
                    "& fieldset": { border: "none" },
                    backgroundColor: "white",
                    boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box sx={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Link to="Dashboard">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    marginTop: "10px",
                    backgroundColor: "#BA5112",
                    boxShadow: "2px 2px 6px 0px rgba(0, 0, 0, 0.1)",
                    height: "5vh",
                    "&:hover": {
                      backgroundColor: "#BA5112",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "rgba(186, 81, 18)",
                    },
                  }}
                >
                  Sign Up
                </Button>
                </Link>
              <Box sx={{ marginTop: "10px", color: "white" }}>
                Already have an account? Sign in{" "}
                <Link to="signIn"
                  style={{ color: "#BA5112", textDecoration: "none" }}
                >
                  &nbsp;here.
                </Link>
              </Box>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
