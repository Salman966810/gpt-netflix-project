import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
const ListOfMovies = () => {
  const movies = useSelector((store) => store.NPmovies);
  return (
    <div>
      <MoviesList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
       <MoviesList title={"Trending Movies"} movies={movies.topRatedMovies} />
    </div>
  );
};

export default ListOfMovies;
