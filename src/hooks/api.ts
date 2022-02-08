import data, { MovieInterface } from "../data/data";

export const useFetchAllMovies = () => {
  return data;
};

export const useFetchMovieByID = (id: string) => {
  return data.find((d) => d.id === id) as MovieInterface;
};
