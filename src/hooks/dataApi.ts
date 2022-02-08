export interface MovieInterface {
  id: string;
  title: string;
  resume: string;
  rate: number;
}

export const initialData: MovieInterface[] = [
  {
    id: "1",
    title: "Spiderman",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },

  {
    id: "2",
    title: "Lorem ipsum",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },
  {
    id: "3",
    title: "Atypical",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 5,
  },
];

export const useFetchAllMovies = () => {
  return initialData;
};

export const useFetchMovieByID = (id: string) => {
  return initialData.find((d) => d.id === id) as MovieInterface;
};

export const useAddNewMovie = (
  title: string,
  rate: number,
  resume: string,
  id: string
) => {
  initialData.unshift({ title, rate, resume, id });
};
