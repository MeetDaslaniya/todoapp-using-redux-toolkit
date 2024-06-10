import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    changeState: (state, action) => {
      state.tasks.filter((item) => {
        if (item.id === action.payload) {
          item.Active = !item.Active;
        }
      });
    },
    deleteOne: (state, action) => {
      state.tasks=state.tasks.filter((item) => {
        return item.id!=action.payload;
      });
    },
    deleteAll: (state, action) => {
      state.tasks = [];
    },
    
  },
});

export const { addTask, changeState, deleteAll, deleteOne} = todoSlice.actions;
export default todoSlice.reducer;
