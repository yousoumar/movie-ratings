import React, {
  createContext,
  FC,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { FlatList } from "react-native";

export interface MovieInterface {
  title: string;
  resume: string;
  rate: number;
  imageUri: string;
}
export let initialData: MovieInterface[] = [];

interface DataContextType {
  data: MovieInterface[];
  setData: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
  fetchMovieByTitle: (title: string) => MovieInterface;
  addNewMovie: (
    title: string,
    rate: number,
    resume: string,
    imageUri: string
  ) => boolean;
  filterMovies: (text: string) => void;
  flatListRef: RefObject<FlatList<MovieInterface>>;
  isContainData: boolean;
}

const DataContext = createContext<DataContextType | null>(null);
export const useDataContext = () => {
  return useContext(DataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [isContainData, setIsContainData] = useState(initialData.length > 0);
  const flatListRef = useRef<FlatList>(null);

  const fetchMovieByTitle = (title: string) => {
    return data.find((d) => d.title === title) as MovieInterface;
  };

  const addNewMovie = (
    title: string,
    rate: number,
    resume: string,
    imageUri: string
  ) => {
    if (data.some((d) => d.title === title)) {
      return false;
    }
    setData([{ title, rate, resume, imageUri }, ...data]);
    initialData = [{ title, rate, resume, imageUri }, ...initialData];
    setIsContainData(initialData.length > 0);
    return true;
  };

  const filterMovies = (text: string) => {
    if (text.trim() === "") {
      setData(initialData);
    } else {
      setData(
        initialData.filter((d) =>
          d.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchMovieByTitle,
        addNewMovie,
        filterMovies,
        flatListRef,
        isContainData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
