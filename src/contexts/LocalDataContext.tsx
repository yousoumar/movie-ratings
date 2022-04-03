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

export interface LocalMovieInterface {
  title: string;
  resume: string;
  rate: number;
  imageUri: string;
}

interface LacalDataContextType {
  data: LocalMovieInterface[];
  flatListRef: RefObject<FlatList<LocalMovieInterface>>;
  isContainData: boolean;
  isLoading: boolean;
  setData: React.Dispatch<React.SetStateAction<LocalMovieInterface[]>>;
  fetchMovieByTitle: (title: string) => LocalMovieInterface;
  addNewMovie: (
    title: string,
    rate: number,
    resume: string,
    imageUri: string
  ) => boolean;
  filterMovies: (text: string) => void;
  removeData: () => void;
}

const LocalDataContext = createContext<LacalDataContextType | null>(null);
export const useDataContext = () => {
  return useContext(LocalDataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [initialData, setInitialData] = useState<LocalMovieInterface[]>([]);
  const [data, setData] = useState<LocalMovieInterface[]>([]);
  const [isContainData, setIsContainData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const flatListRef = useRef<FlatList<LocalMovieInterface>>(null);

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
    return data.find((d) => d.title === title) as LocalMovieInterface;
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
    <LocalDataContext.Provider
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
    </LocalDataContext.Provider>
  );
};

export default DataContextProvider;
