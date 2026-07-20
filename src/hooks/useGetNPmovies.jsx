import { useEffect } from "react";
import { API_OPTIONS } from "../../constants";
import { useDispatch } from "react-redux";
import { addToNowPlayMovies } from "../utils/movieSlicer";

const useGetNPmovies = () => {
  const dispatcherForMovies = useDispatch();
  const getNowPlayingMoviesList =  () => {
    console.log("oh my gooodd")
  
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
        dispatcherForMovies(addToNowPlayMovies(res.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // console.log("useEffect Executed")
    getNowPlayingMoviesList();
  }, []);
};

export default useGetNPmovies;
