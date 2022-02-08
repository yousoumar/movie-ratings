import React, { createContext, FC, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { MovieInterface } from "../data/data";
import { useFetchAllMovies } from "../hooks/api";

interface ContextInterface {
  data: MovieInterface[];
  setData: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
}
const DataContext = createContext<ContextInterface>({} as any);
export const useDataContext = () => {
  return useContext(DataContext);
};

interface Props {}

const MoviesContext: FC<Props> = ({ children }) => {
  const [data, setData] = useState<MovieInterface[]>(useFetchAllMovies());
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default MoviesContext;
