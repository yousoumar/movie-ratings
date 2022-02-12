import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  FC,
  RefObject,
  useContext,
  useEffect,
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
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | null>(null);
export const useDataContext = () => {
  return useContext(DataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [initialData, setInitialData] = useState<MovieInterface[]>([]);
  const [data, setData] = useState(initialData);
  const [isContainData, setIsContainData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const flatListRef = useRef<FlatList>(null);

  const getStoredData = async () => {
    const stringData = await AsyncStorage.getItem("data");
    if (stringData) {
      setInitialData(JSON.parse(stringData));
      setData(JSON.parse(stringData));
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getStoredData();
  }, []);

  useEffect(() => {
    setIsContainData(initialData.length > 0);
  }, [initialData]);

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
    setInitialData([{ title, rate, resume, imageUri }, ...initialData]);
    AsyncStorage.setItem(
      "data",
      JSON.stringify([{ title, rate, resume, imageUri }, ...initialData])
    );
    setIsContainData(true);
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
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
