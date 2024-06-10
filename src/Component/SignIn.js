import * as React from "react";
import { useState } from "react";
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
import { Typography } from "@mui/material";

function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameMessage,setUsernameMessage]=useState("");
  const [passwordMessage,setpasswordMessage]=useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
console.log(passwordMessage)
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
            backgroundColor: "White",
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
                color: "rgba(186, 81, 18, 1)",
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
                color: "rgba(37, 24, 20, 1)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Start organizing your life day by day
            </div>
            <form style={{ width: "35vw", marginTop: "5vh" }}>
              <TextField
                id="outlined-basic"
                label="Enter your username"
                variant="outlined"
                onChange={(e) => setUserName(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  "& fieldset": { border: "none" },
                  width: "100%",
                  marginLeft: "1.5%",
                  boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.1)",
                  
                }}
              />
              <Typography sx={{marginBottom: "20px",color:"red", fontSize:"10px", marginLeft:"25px", marginTop:"5px",display:usernameMessage?"block":"noone"}}>{usernameMessage}</Typography>
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
                    Enter your password
                  </InputLabel>
                  <OutlinedInput
                    onChange={(e) => setPassword(e.target.value)}
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
                  <Typography sx={{color:"red", fontSize:"10px", marginLeft:"25px", marginTop:"5px",display:passwordMessage?"block":"none"}}>{passwordMessage}</Typography>
              </Box>
                
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to={userName==='meet1234@gmail.com'&&password==='Meet@1234'?"/Dashboard":""}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      marginTop: "10px",
                      backgroundColor: "rgba(237, 176, 70, 1)",
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
                    onClick={() => {
                      if (userName != "meet1234@gmail.com") {
                        setUsernameMessage("*invalid Username.");
                      }
                      if (password != "Meet@1234") {
                        setpasswordMessage("*invalid Password.");
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </Link>
                <Box sx={{ marginTop: "10px", color: "rgba(37, 24, 20, 1)" }}>
                  Don’t have an account?Create
                  <Link
                    to="/"
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
