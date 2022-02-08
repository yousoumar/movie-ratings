import data, { MovieInterface } from "../data/data";

export const useFetchAllMovies = () => {
  return data;
};

export const useFetchMovieByID = (id: string) => {
  return data.find((d) => d.id === id) as MovieInterface;
};

export const useAddNewMovie = (
  title: string,
  rate: number,
  resume: string,
  id: string
) => {
  data.unshift({ title, rate, resume, id });
};
