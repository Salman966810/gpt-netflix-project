import { POSTER_PATH_CDN_URL } from "../../../constants"
const MovieCard = ({poster_path}) => {
  return (
    <div className="flex w-60 pr-4">
      <img src={POSTER_PATH_CDN_URL + poster_path} alt="posterImage" />
    </div>
  )
}

export default MovieCard