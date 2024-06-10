import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ActiveTodo from "../Image/ActiveTodo.svg";
import DeleteLogoTooltip from "../Image/DeleteLogoTooltip.svg";
import editLogoTooltip from "../Image/editLogoTooltip.svg";
import CompletedTodo from "../Image/CompletedTodo.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeState, deleteOne } from "../todoSlice";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function TodoList(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: props.Active ? "" : "rgba(237, 176, 70, 1)",
          borderRadius: "12px",
          boxShadow: "2px 2px 6px 0px rgba(0, 0, 0, 0.1)",
          display: "flex",
          marginTop: "24px",
          height: "7vh",
          alignItems: "center",
        }}
      >
        <Button
          disableRipple
          onClick={() => {
            dispatch(changeState(props.id));
          }}
        >
          <img
            src={props.Active ? ActiveTodo : CompletedTodo}
            style={{ width: "28px" }}
          />
        </Button>
        <Box
          onClick={handleOpen}
          sx={{
            width:props.width,
            display: "flex",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          <Typography
            sx={{
              width: "40%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginLeft: "20px",
              color: "rgba(37, 24, 20, 1)",
            }}
          >
            {props.TaskTitle}
          </Typography>
          <Typography
            sx={{
              width: "40%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginLeft: "40px",
              color: "rgba(37, 24, 20, 1)",
            }}
          >
            {props.TaskDesc}
          </Typography>
          <Typography sx={{marginLeft:"40px",width: "40%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",}}>{props.DueDate}</Typography>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "28px",
              color: "rgba(37, 24, 20, 1)",
              width: "400",
              wordBreak:"break-word"
            }}
          >
            {props.TaskTitle}
          </Typography>
          <Typography sx={{fontWeight:"400", fontSize:"16px", color:"rgba(181, 181, 181, 1)"}}>Due Date : {props.DueDate}</Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              color: "rgba(37, 24, 20, 1)",
              marginTop: "30px",
            }}
          >
            Description
          </Typography>
          <Typography
            sx={{
              width: "400",
              wordWrap: "break-word",
              maxHeight: "20vh",
              scrollbarWidth: "none",
              overflow: "scroll",
              fontWeight: "400",
              fontSize: "20px",
              color: "rgba(37, 24, 20, 1)",
            }}
          >
            {props.TaskDesc}
          </Typography>
          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Button
                disableRipple
                onClick={() => {
                  dispatch(changeState(props.id));
                  setOpen(false);
                }}
              >
                <img
                  src={props.Active ? ActiveTodo : CompletedTodo}
                  style={{ width: "28px" }}
                />
              </Button>
            </Box>
            <Box>
              <Button
                disableRipple
                onClick={() => {
                  dispatch(deleteOne(props.id));
                  setOpen(false);
                }}
              >
                <img src={DeleteLogoTooltip} style={{ width: "20px" }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default TodoList;
