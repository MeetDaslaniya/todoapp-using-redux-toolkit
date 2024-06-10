import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import AddButton from "../Image/AddButton.svg";
import logoutSymbol from "../Image/logoutSymbol.svg";
import { Link, Outlet } from "react-router-dom";
import { addTask, deleteAll } from "../todoSlice";
import Modal from "@mui/material/Modal";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

var userId = 0;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SideBar() {
  const [date, setDate] = useState("");
  const [dateMsg, setDateMsg] = useState("");
  const formattedDate = date?.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [titleMsg, setTitleMsg] = useState("");
  const [discMsg, setDiscMsg] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitleMsg("");
    setDateMsg("");
    setDiscMsg("");
    setDate("");
    setDiscription("");
    setTitle("");
  };
  function handleClosefun() {
    setOpen(false);

    setTitleMsg("");
    setDateMsg("");
    setDiscMsg("");
    setDate("");
    setDiscription("");
    setTitle("");
  }
  const [active, setActive] = useState("Dashboard");
  const dispatch = useDispatch();

  const handleSave = (event) => {
    let isValid = true;

    setTitleMsg("");
    setDiscMsg("");
    setDateMsg("");

    if (!date && !title && !discription) {
      handleClosefun();
      return;
    }
    if (!date) {
      setDateMsg("Date is required");
      isValid = false;
    }
    if (!title) {
      setTitleMsg("Title is required");
      isValid = false;
    } else if (title.length > 100) {
      setTitleMsg("Title must be less than 100 characters");
      isValid = false;
    }
    if (!discription) {
      setDiscMsg("Description is required");
      isValid = false;
    } else if (discription.length > 1000) {
      setDiscMsg("Description must be less than 1000 characters");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    userId = userId + 1;
    dispatch(
      addTask({
        id: userId,
        TaskTitle: title,
        TaskDesc: discription,
        Active: true,
        DueDate: formattedDate,
      })
    );
    handleClosefun();
    console.log("Save action performed");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "18vw", height: "100vh" }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            color: "rgba(186, 81, 18, 1)",
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
            marginBottom: "54px",
          }}
        >
          To-Do App
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Button disableRipple>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "150px",
                justifyContent: "space-between",
                boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
                padding: "15px",
                borderRadius: "12px",
                textTransform: "capitalize",
                color: "rgba(37, 24, 20, 1)",
              }}
              onClick={handleOpen}
            >
              <Typography sx={{ fontWeight: "400", fontSize: "20px" }}>
                Add Task
              </Typography>
              <img src={AddButton}></img>
            </Box>
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box>
                  <DatePicker
                    format="MM/dd/yyyy HH:mm"
                    placeholder="Due Date"
                    onChange={(date) => {
                      setDate(date);
                      if (date) {
                        setDateMsg("");
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      display: dateMsg ? "block" : "none",
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {dateMsg}
                  </Typography>
                </Box>
                <Box>
                  <input
                    type="text"
                    name="title"
                    placeholder="Add  title"
                    style={{
                      width: "100%",
                      height: "50px",
                      fontSize: "28px",
                      borderRadius: "12px",
                      textIndent: "10px",
                      border: "none",
                      boxShadow: " 2px 2px 6px 0px rgba(0, 0, 0, 0.1)",
                    }}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (e.target.value.length > 100) {
                        setTitleMsg("Title must be less than 100 characters");
                      } else {
                        setTitleMsg("");
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      display: title.length > 100 ? "none" : "flex",
                      width: "95%",
                      color: "black",
                      justifyContent: "end",
                      fontSize: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {title.length}/100
                  </Typography>
                  <Typography
                    sx={{
                      display: titleMsg ? "block" : "none",
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {titleMsg}
                  </Typography>
                  <textarea
                    placeholder="Add description"
                    style={{
                      width: "100%",
                      height: "150px",
                      marginTop: "10px",
                      borderRadius: "12px",
                      border: "none",
                      fontSize: "20px",
                      resize: "none",
                      textIndent: "10px",
                      boxShadow: " 2px 2px 6px 0px rgba(0, 0, 0, 0.1)",
                    }}
                    name="discription"
                    onChange={(e) => {
                      setDiscription(e.target.value);
                      if (e.target.value.length > 1000) {
                        setDiscMsg(
                          "Description must be less than 1000 characters"
                        );
                      } else {
                        setDiscMsg("");
                      }
                    }}
                  />
                  <Typography
                    sx={{
                      display: discription.length > 1000 ? "none" : "flex",
                      width: "95%",
                      justifyContent: "end",
                      color: "black",
                      fontSize: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {discription.length}/1000
                  </Typography>
                  <Typography
                    sx={{
                      display: discMsg ? "block" : "none",
                      color: "red",
                      fontSize: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {discMsg}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    sx={{
                      marginRight: "10px",
                      textTransform: "capitalize",
                      color: "rgba(237, 176, 70, 1)",
                      borderColor: "rgba(237, 176, 70, 1)",
                      "&:hover": {
                        borderColor: "#BA5112",
                        boxShadow: "none",
                      },
                      "&:active": {
                        boxShadow: "none",
                        borderColor: "rgba(237, 176, 70, 1)",
                      },
                    }}
                  >
                    cancel
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "rgba(237, 176, 70, 1)",
                      "&:hover": {
                        backgroundColor: "#BA5112",
                        boxShadow: "none",
                      },
                      "&:active": {
                        boxShadow: "none",
                        backgroundColor: "rgba(237, 176, 70, 1)",
                      },
                    }}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
        </Box>
        <Box>
          <ul
            style={{
              listStyle: "none",
              paddingInlineStart: "0",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <Link
              to="Dashboard"
              style={{ textDecoration: "none", color: "rgba(37, 24, 20, 1)" }}
            >
              <li
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor:
                    active === "Dashboard" ? "rgba(237, 176, 70, 1)" : "",
                }}
                onClick={() => {
                  setActive("Dashboard");
                }}
              >
                Dashboard
              </li>
            </Link>
            <Link
              to="Active"
              style={{ textDecoration: "none", color: "rgba(37, 24, 20, 1)" }}
            >
              <li
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor:
                    active === "Active" ? "rgba(237, 176, 70, 1)" : "",
                }}
                onClick={() => {
                  setActive("Active");
                }}
              >
                Active
              </li>
            </Link>
            <Link
              to="Completed"
              style={{ textDecoration: "none", color: "rgba(37, 24, 20, 1)" }}
            >
              <li
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginTop: "8px",
                  marginBottom: "8px",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor:
                    active === "Completed" ? "rgba(237, 176, 70, 1)" : "",
                }}
                onClick={() => {
                  setActive("Completed");
                }}
              >
                Completed
              </li>
            </Link>
          </ul>
        </Box>
      </Box>
      <Box sx={{ width: "82vw" }}>
        <Box sx={{ padding: "30px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontWeight: "500",
                fontSize: "28px",
                color: "rgba(37, 24, 20, 1)",
              }}
            >
              {active}
            </Box>
            <Box>
              <Link to="/signIn">
                <Button
                  sx={{
                    backgroundColor: "rgba(186, 81, 18, 1)",
                    borderRadius: "10px",
                    color: "white",
                    width: "10vw",
                    height: "5vh",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "rgba(186, 81, 18, 1)",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "rgba(186, 81, 18, 1)",
                    },
                  }}
                  onClick={() => {
                    dispatch(deleteAll());
                  }}
                >
                  Sign out{" "}
                  <img src={logoutSymbol} style={{ marginLeft: "10px" }}></img>
                </Button>
              </Link>
            </Box>
          </Box>
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
