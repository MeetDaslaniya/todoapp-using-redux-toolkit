import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./todoSlice";

export default configureStore({
    reducer:{
        todo:todoreducer
    }
})