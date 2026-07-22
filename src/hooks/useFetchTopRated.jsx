import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addTopRatedMovies } from "../utils/movieSlicer";
import { useEffect } from "react";

const useFetchTopRated = () => {
  const disptach = useDispatch();
  const fetchTopRatedMovies = async () => {
    // console.log("trailer api called")
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const data = await response.json();
    // console.log(data);

    disptach(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};

export default useFetchTopRated;
