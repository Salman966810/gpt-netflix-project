import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
   name:"NPmovies",
   initialState:{
      nowPlayingMovies:null,
      trailerVideo:null
   },
   reducers:{
      addToNowPlayMovies:(state,action) => {
         state.nowPlayingMovies = action.payload;
      },
      addTrailerInfo :(state,action) => {
         state.trailerVideo = action.payload;
      }
   }
})

export const {addToNowPlayMovies , addTrailerInfo} = movieSlicer.actions;
export default movieSlicer.reducer;