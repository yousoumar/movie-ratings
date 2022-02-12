import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext } from "react";

export type User = {
  email: string;
  password: string;
} | null;

interface AuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  registerAndLogin: (
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
  ) => Promise<void>;
  logout: (setUser: React.Dispatch<React.SetStateAction<User>>) => void;
}

export const registerAndLogin = async (
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>
) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  } catch (e) {
    console.log(e);
  }
};

export const logout = (setUser: React.Dispatch<React.SetStateAction<User>>) => {
  try {
    AsyncStorage.removeItem("user");
    setUser(null);
  } catch (e) {
    console.log(e);
  }
};

export const checkForUser = async (
  setUser: React.Dispatch<React.SetStateAction<User>>
) => {
  const storedUser = await AsyncStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
};

export const useAuthContext = () => useContext(AuthContext);

export const AuthContext = createContext<AuthContextType | null>(null);
