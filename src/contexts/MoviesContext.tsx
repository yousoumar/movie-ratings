import React, { createContext, FC, useContext } from "react";
import { MovieInterface } from "../data/data";
import { useFetchAllMovies } from "../hooks/api";

interface ContextInterface {
  data: MovieInterface[];
}
const DataContext = createContext<ContextInterface>({} as ContextInterface);
export const useDataContext = () => {
  return useContext(DataContext);
};

interface Props {}

const MoviesContext: FC<Props> = ({ children }) => {
  return (
    <DataContext.Provider value={{ data: useFetchAllMovies() }}>
      {children}
    </DataContext.Provider>
  );
};

export default MoviesContext;
