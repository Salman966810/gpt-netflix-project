import Header from "./Header";
import { API_OPTIONS } from "../../constants";
import { useEffect } from "react";
const Browse = () => {
  const getNowPlayingMoviesList = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => console.log(res.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
  return (
    <div>
      <Header isBrowse />
    </div>
  );
};

export default Browse;
