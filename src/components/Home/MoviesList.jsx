import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log(movies);
  console.log(typeof movies);

  if(!movies) return null;


  return (
    <div className="p-6">
      <div className="mb-4">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard poster_path={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
