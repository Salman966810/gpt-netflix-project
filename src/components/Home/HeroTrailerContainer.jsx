import { useSelector } from "react-redux";
import MoviesDescription from "./MoviesDescription";
import BackGroundVideo from "./BackGroundVideo";

const HeroTrailerContainer = () => {
  const movieData = useSelector((store) => store.NPmovies.nowPlayingMovies);

  if (!movieData) return null;

  const firstMovie = movieData[0];

  const { id, original_title, overview } = firstMovie;
  // console.log(id , original_title)

  return (
    <div className="relative">
      <MoviesDescription
        id={id}
        original_title={original_title}
        overview={overview}
      />
      <BackGroundVideo movieId={id} />
    </div>
  );
};

export default HeroTrailerContainer;
