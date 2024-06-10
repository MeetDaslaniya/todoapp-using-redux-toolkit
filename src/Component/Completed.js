import { Typography, Box } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import TodoList from './TodoList';


function Completed() {
  const date = new Date(); 
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <Box>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"40px"}}>
        <Typography sx={{fontSize:"28px", fontWeight:"600", color:"rgba(37, 24, 20, 1)"}}>Completed Tasks</Typography>
        <Typography>{date.toDateString()}</Typography>
      </Box>
      <Box sx={{height:"70vh", overflowY:"scroll",overflowX:"hidden", scrollbarWidth:"thin"}}>
         { tasks.filter((item)=>{
            return item.Active===false
         }).map((item)=>{
          return <TodoList width="70vw" {...item}/>
         })
         }
      </Box>
      
 
     
    </Box>
  )
}

export default Completed