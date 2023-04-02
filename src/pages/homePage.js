import { useState } from "react";
import Filtred from "../components/Filter";
import MovieList from "../components/MovieList";
import NavBar from "../components/navbar";
import { Series } from "../data/Series";

export const HomePage = () => {
  const [SeriesList, setSeriesList] = useState(Series);

  return (
    <>
      <NavBar />
      <MovieList data={SeriesList} />
      <Filtred SeriesList={SeriesList} setSeriesList={setSeriesList} />
    </>
  );
};
