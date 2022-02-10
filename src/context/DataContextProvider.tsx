import React, { createContext, FC, useContext, useState } from "react";

export interface MovieInterface {
  id: string;
  title: string;
  resume: string;
  rate: number;
}

const initialData: MovieInterface[] = [
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

interface Context {
  data: MovieInterface[];
  setData: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
  fetchMovieById: (id: string) => MovieInterface;
  addNewMovie: (
    title: string,
    rate: number,
    resume: string,
    id: string
  ) => void;
  filterMovies: (text: string) => void;
}

const DataContext = createContext({} as Context);
export const useDataContext = () => {
  return useContext(DataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [data, setData] = useState(initialData);

  const fetchMovieById = (id: string) => {
    return data.find((d) => d.id === id) as MovieInterface;
  };

  const addNewMovie = (
    title: string,
    rate: number,
    resume: string,
    id: string
  ) => {
    setData([{ title, rate, resume, id }, ...data]);
  };

  const filterMovies = (text: string) => {
    if (text.trim() === "") {
      setData(initialData);
    } else {
      setData(data.filter((d) => d.title.toLowerCase().includes(text)));
    }
  };

  return (
    <DataContext.Provider
      value={{ data, setData, fetchMovieById, addNewMovie, filterMovies }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
