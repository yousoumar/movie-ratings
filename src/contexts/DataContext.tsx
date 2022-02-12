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
  flatListRef: RefObject<FlatList<MovieInterface>>;
  isContainData: boolean;
  isLoading: boolean;
  setData: React.Dispatch<React.SetStateAction<MovieInterface[]>>;
  fetchMovieByTitle: (title: string) => MovieInterface;
  addNewMovie: (
    title: string,
    rate: number,
    resume: string,
    imageUri: string
  ) => boolean;
  filterMovies: (text: string) => void;
  removeData: () => void;
}

const DataContext = createContext<DataContextType | null>(null);
export const useDataContext = () => {
  return useContext(DataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [initialData, setInitialData] = useState<MovieInterface[]>([]);
  const [data, setData] = useState<MovieInterface[]>([]);
  const [isContainData, setIsContainData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const flatListRef = useRef<FlatList<MovieInterface>>(null);

  const getStoredData = async () => {
    try {
      const stringData = await AsyncStorage.getItem("data");
      if (stringData) {
        const data = JSON.parse(stringData);
        setInitialData(data);
        setData(data);
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
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
    try {
      AsyncStorage.setItem(
        "data",
        JSON.stringify([{ title, rate, resume, imageUri }, ...initialData])
      );
    } catch (e) {
      console.log(e);
    }
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

  const removeData = async () => {
    setInitialData([]);
    setData([]);
    setIsContainData(false);
    await AsyncStorage.removeItem("data");
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
        removeData,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
