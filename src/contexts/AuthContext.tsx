import { createContext, useContext } from "react";

export type User = {
  name: string;
  email: string;
  password: string;
} | null;

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  register: (user: User) => Promise<void>;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  deleteAccount: () => Promise<void>;
}

export const useAuthContext = () => useContext(AuthContext);

export const AuthContext = createContext<AuthContextType | null>(null);
