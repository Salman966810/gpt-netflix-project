/* eslint-disable no-unused-vars */
import Header from "./Header";
import useGetNPmovies from "../hooks/useGetNPmovies";
import HeroTrailerContainer from "./Home/HeroTrailerContainer";
import ListOfMovies from "./Home/ListOfMovies";
import { useEffect } from "react";
const Browse = () => {


  useGetNPmovies()
  return (
    <div>
      <Header isBrowse />
      <HeroTrailerContainer />
      <ListOfMovies />
    </div>
  );
};

export default Browse;
