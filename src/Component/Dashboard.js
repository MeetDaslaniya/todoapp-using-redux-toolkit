import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Ladki from "../Image/Ladki.svg";
import PenddingLogo from "../Image/PenddingLogo.svg";
import CompletedLogo from "../Image/CompletedLogo.svg";
import { useSelector, useDispatch } from "react-redux";
import { DatePicker, InputGroup } from "rsuite";
import { deleteAll } from "../todoSlice";
import TodoList from "./TodoList";
import "rsuite/dist/rsuite.min.css";

function Dashboard() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const date = new Date();
  const [calculatePr, setCalculatePr] = useState(0);
  const tasks = useSelector((state) => state.todo.tasks);
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  console.log(Date.parse(fromDate));
  console.log(Date.parse(toDate));
  useEffect(() => {
    let Count = 0;
    let completedCount = 0;
    let Calculate = 0;
    tasks.map((item) => {
      Count += 1;
      if (item.Active === false) {
        completedCount += 1;
      }
    });
    if (Count > 0) {
      Calculate = Math.round((completedCount * 100) / Count);
    }
    setCalculatePr(Calculate);
  }, [tasks]);
  return (
    <Box sx={{ padding: "35px" }}>
      <Box
        sx={{
          width: "100%",
          height: "23vh",
          backgroundColor: "White",
          borderRadius: "16px",
          boxShadow: " 2px 2px 10px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{ paddingTop: "3vh", paddingLeft: "5%", position: "relative" }}
        >
          <Typography
            sx={{
              fontSize: "44px",
              fontWeight: "700",
              color: "rgba(37, 24, 20, 1)",
            }}
          >
            Hello, Beautiful Human!
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(37, 24, 20, 1)",
            }}
          >
            What do you want to do today?
          </Typography>
          <img
            src={Ladki}
            style={{
              position: "absolute",
              right: "60px",
              top: "15px",
              width: "13.2vw",
            }}
          ></img>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <input
          placeholder="Search"
          style={{
            marginTop: "10px",
            width: "200px",
            height: "35px",
            borderRadius: "10px",
          }}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <InputGroup style={{ width: 328 , marginTop:"12px", marginLeft:"12px",border:"2px solid black"}}>
          <DatePicker
            format="yyyy-MM-dd HH:mm"
            block
            appearance="subtle"
            style={{ width: 230 }}
            onChange={(date) => {
              setFromDate(date);
            }}
          />
          <InputGroup.Addon>to</InputGroup.Addon>
          <DatePicker
            format="yyyy-MM-dd HH:mm"
            block
            appearance="subtle"
            style={{ width: 230 }}
            onChange={(date) => {
              setToDate(date);
            }}
          />
        </InputGroup>
      </Box>
      <Box sx={{ display: "flex", height: "46vh" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "60vw",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "rgba(37, 24, 20, 1)",
                }}
              >
                Tasks
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(186, 81, 18, 1)",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  dispatch(deleteAll());
                }}
              >
                Delete All
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              height: "46vh",
              overflowY: "scroll",
              overflowX: "hidden",
              scrollbarWidth: "thin",
            }}
          >
            {tasks
              .filter((item) => {
                const dueDate = Date.parse(item.DueDate);
                return (
                  dueDate >=
                    Date.parse(fromDate || "Wed Jun 19 1824 00:00:00") &&
                  dueDate <= Date.parse(toDate || "Wed Jun 19 2100 00:00:00")
                );
              })
              .filter((item) => {
                return item.TaskTitle.toString()
                  .toLowerCase()
                  .includes(searchItem.toString().toLowerCase());
              })
              .map((item) => {
                return <TodoList width="55vw" {...item} />;
              })}
          </Box>
        </Box>
        <Box sx={{ marginLeft: "30px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(37, 24, 20, 1)",
              marginTop: "8px",
            }}
          >
            {date.toDateString()}
          </Typography>
          <Box
            sx={{
              height: "40%",
              width: "13vw",
              backgroundColor: "rgba(186, 81, 18, 1)",
              borderRadius: "12px",
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={CompletedLogo} style={{ width: "35px" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              {calculatePr}%
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Completed tasks
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "7%",
              height: "40%",
              width: "13vw",
              backgroundColor: "rgba(237, 176, 70, 1)",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={PenddingLogo} style={{ width: "35px" }} />
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              {100 - calculatePr}%
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "14px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Active tasks
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
