import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "NPmovies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
  },
  reducers: {
    addToNowPlayMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addToNowPlayMovies, addTrailerInfo, addTopRatedMovies } =
  movieSlicer.actions;
export default movieSlicer.reducer;
