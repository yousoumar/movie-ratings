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
let initialData: MovieInterface[] = [
  {
    title: "Atypical",
    resume:
      "Sam, un jeune adolescent autiste, se met en quête d'une histoire romantique et d'indépendance. Sa volonté de trouver l'amour sera un véritable tournant dans la vie de sa mère.",
    rate: 5,
    imageUri:
      "https://fr.web.img3.acsta.net/pictures/19/10/21/14/58/4891368.jpg",
  },
  {
    title: "For Jacob",
    resume:
      "Défendre Jacob, est une mini-série dramatique criminelle américaine en huit épisodes de 45 minutes, créée par Mark Bomback, diffusée depuis le 24 avril 2020 sur Apple TV+",
    rate: 4,
    imageUri:
      "https://fr.web.img6.acsta.net/r_654_368/newsv7/20/06/01/10/19/2294897.jpg",
  },

  {
    title: "Spiderman",
    resume:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequivoluptatum commodi praesentium nobis debitis asperiores;",
    rate: 2,
    imageUri:
      "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/C784xeOFo2wViCf4m5bxgoeH.png",
  },
];

interface Context {
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
}

const DataContext = createContext({} as Context);
export const useDataContext = () => {
  return useContext(DataContext);
};

const DataContextProvider: FC = ({ children }) => {
  const [data, setData] = useState(initialData);
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
    return true;
  };

  const filterMovies = (text: string) => {
    if (text.trim() === "") {
      setData(initialData);
    } else {
      setData(
        data.filter((d) => d.title.toLowerCase().includes(text.toLowerCase()))
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
