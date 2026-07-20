import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../constants";
import { addTrailerInfo } from "../utils/movieSlicer";
import { useEffect } from "react";

const useFetchTrailerBgVideo = ({ movieId }) => {
  const disptach = useDispatch();
  const fetchBgMovieTrailer = async () => {
    console.log("trailer api called")
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const data = await response.json();
    console.log(data);

    const filterTrailersOnly = data.results?.filter(
      (video) => video.type === "Trailer",
    );
    const bgTrailer = filterTrailersOnly[0] || data[0];
    console.log(bgTrailer);
    disptach(addTrailerInfo(bgTrailer));
  };

  useEffect(() => {
    fetchBgMovieTrailer();
  }, []);
};

export default useFetchTrailerBgVideo;
