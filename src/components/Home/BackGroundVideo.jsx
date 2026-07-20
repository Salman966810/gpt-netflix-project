import { useSelector } from "react-redux";
import useFetchTrailerBgVideo from "../../hooks/useFetchTrailerBgVideo";

const BackGroundVideo = (movieId) => {
  const selector = useSelector((store) => store.NPmovies.trailerVideo);
  useFetchTrailerBgVideo(movieId);
  return (
    <div className="w-screen aspect-video z-10">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          selector?.key +
          "?&autoplay=1&mute=1&start=35"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackGroundVideo;

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/AyIZ9tiiN8I?si=ZOZRduu_TdHrfyLV&amp&start=36"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>;
