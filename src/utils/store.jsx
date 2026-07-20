import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./movieSlicer"
const store = configureStore({
  reducer:{
   user:userSlice,
   NPmovies:moviesReducer
  }
   
})

export default store;